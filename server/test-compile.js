const http = require('http');

function apiCall(method, path, data, token) {
  return new Promise((resolve, reject) => {
    const body = data ? JSON.stringify(data) : null;
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = 'Bearer ' + token;

    const opts = {
      hostname: 'localhost', port: 3000, path, method, headers
    };

    const req = http.request(opts, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch { resolve(d); }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function test() {
  try {
    // Register a test user
    console.log('1. Registering test user...');
    const reg = await apiCall('POST', '/api/auth/register', {
      username: 'testcompile', password: 'test123', nickname: 'TestCompile', role: 'student'
    });
    console.log('Register result:', JSON.stringify(reg).slice(0, 200));
    const token = reg.token;

    if (!token) {
      console.log('No token, trying login...');
      const login = await apiCall('POST', '/api/auth/login', {
        username: 'testcompile', password: 'test123'
      });
      console.log('Login result:', JSON.stringify(login).slice(0, 200));
      if (login.token) return runCompileTest(login.token);
      return;
    }

    await runCompileTest(token);
  } catch (e) {
    console.error('Error:', e.message);
  }
}

async function runCompileTest(token) {
  // Test 1: Simple compile and run
  console.log('\n2. Testing compile-run...');
  const result1 = await apiCall('POST', '/api/compile/compile-run', {
    code: '#include <iostream>\nusing namespace std;\nint main() { cout << "Hello GESP" << endl; return 0; }',
    stdin: '',
    expectedOutput: 'Hello GESP'
  }, token);
  console.log('Result:', JSON.stringify(result1));

  // Test 2: Compile error
  console.log('\n3. Testing compile error...');
  const result2 = await apiCall('POST', '/api/compile/compile-run', {
    code: '#include <iostream>\nusing namespace std;\nint main() { cout << "missing semicolon" }'
  }, token);
  console.log('Result:', JSON.stringify(result2).slice(0, 300));

  // Test 3: Wrong output
  console.log('\n4. Testing wrong output...');
  const result3 = await apiCall('POST', '/api/compile/compile-run', {
    code: '#include <iostream>\nusing namespace std;\nint main() { cout << "Wrong" << endl; return 0; }',
    expectedOutput: 'Hello GESP'
  }, token);
  console.log('Result:', JSON.stringify(result3));

  // Test 4: Test cases endpoint
  console.log('\n5. Testing test-cases endpoint...');
  const result4 = await apiCall('POST', '/api/compile/compile-run/test-cases', {
    code: '#include <iostream>\nusing namespace std;\nint main() { int a=10,b=3; cout << a+b << endl; cout << a-b << endl; return 0; }',
    testCases: [
      { input: '', expectedOutput: '13\n7', description: 'Sum and difference' }
    ]
  }, token);
  console.log('Result:', JSON.stringify(result4));

  console.log('\n=== All tests completed ===');
}

test();
