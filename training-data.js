module.exports = {
  'departments':[{
    'name' : 'IT',
    'departmentNumber' : 101,
    'departmentLead' : 10001,
    'budget' : 3.5,
    'employees' : [10001]
  },
  {
    'name' : 'HR',
    'departmentNumber' : 102,
    'departmentLead' : 10101,
    'budget' : 99999,
    'employees' : [10101]
  }],
  'employees':[{
    'name' : 'David Feroli',
    'id' : 10001,
    'email' : 'dferoli@redhat.com',
    'address' : 'Charlotte, NC',
    'officeNumber' : 1001,
    'title' : 'Associate Consultant',
    'departmentNumber' : 101
  },
  {
    'name' : 'test',
    'id' : 10101,
    'officeNumber' : 1001,
    'email' : 'test@test.test',
    'departmentNumber' : 102,
    'title' : 'Boss Man'
  },
  {
    'name' : 'Not Dave',
    'id' : 10002,
    'email' : 'ndave@redhat.com',
    'address' : 'Charlotte, NC',
    'officeNumber' : 1001,
    'title' : 'Associate Consultant',
    'departmentNumber' : 101
  }],
  'offices':[{
     'employees' : [10001, 10101],
     'nickname' : 'Charlotte',
     'id' : 1001,
     'address' : '401 N Tryon, Charlotte, NC',
     'officeManager' : 10001,
     'size' : 2000,
     'expenses' : 4321.5
  }]
};
