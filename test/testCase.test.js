import { Validate } from "../utils/Validate.js"

describe('Test functionality of class', () => {

    //Test validation class
    test('Test validate', () => { 
        expect(Validate.validateAssignment([
            {
              Employee_Name: 'Hamish Murray',
              Employee_EmailID: 'hamish.murray@acme.com'
            },
            {
              Employee_Name: 'Layla Graham',
              Employee_EmailID: 'layla.graham@acme.com'
            },
            {
              Employee_Name: 'Matthew King',
              Employee_EmailID: 'matthew.king@acme.com'
            },
            {
              Employee_Name: 'Benjamin Collins',
              Employee_EmailID: 'benjamin.collins@acme.com'
            },
            {
              Employee_Name: 'Isabella Scott',
              Employee_EmailID: 'isabella.scott@acme.com'
            },
            {
              Employee_Name: 'Charlie Ross',
              Employee_EmailID: 'charlie.ross@acme.com'
            },
            {
              Employee_Name: 'Hamish Murray',
              Employee_EmailID: 'hamish.murray.sr@acme.com'
            },
            {
              Employee_Name: 'Piper Stewart',
              Employee_EmailID: 'piper.stewart@acme.com'
            },
            {
              Employee_Name: 'Spencer Allen',
              Employee_EmailID: 'spencer.allen@acme.com'
            },
            {
              Employee_Name: 'Charlie Wright',
              Employee_EmailID: 'charlie.wright@acme.com'
            },
            {
              Employee_Name: 'Hamish Murray',
              Employee_EmailID: 'hamish.murray.jr@acme.com'
            },
            {
              Employee_Name: 'Charlie Ross',
              Employee_EmailID: 'charlie.ross.jr@acme.com'
            },
            {
              Employee_Name: 'Ethan Murray',
              Employee_EmailID: 'ethan.murray@acme.com'
            },
            {
              Employee_Name: 'Matthew King',
              Employee_EmailID: 'matthew.king.jr@acme.com'
            },
            {
              Employee_Name: 'Mark Lawrence',
              Employee_EmailID: 'mark.lawrence@acme.com'
            }
          ],[
            {
              Employee_Name: 'Hamish Murray',
              Employee_EmailID: 'hamish.murray@acme.com',
              Secret_Child_Name: 'Benjamin Collins',
              Secret_Child_EmailID: 'benjamin.collins@acme.com'
            },
            {
              Employee_Name: 'Layla Graham',
              Employee_EmailID: 'layla.graham@acme.com',
              Secret_Child_Name: 'Piper Stewart',
              Secret_Child_EmailID: 'piper.stewart@acme.com'
            },
            {
              Employee_Name: 'Matthew King',
              Employee_EmailID: 'matthew.king@acme.com',
              Secret_Child_Name: 'Spencer Allen',
              Secret_Child_EmailID: 'spencer.allen@acme.com'
            },
            {
              Employee_Name: 'Benjamin Collins',
              Employee_EmailID: 'benjamin.collins@acme.com',
              Secret_Child_Name: 'Ethan Murray',
              Secret_Child_EmailID: 'ethan.murray@acme.com'
            },
            {
              Employee_Name: 'Isabella Scott',
              Employee_EmailID: 'isabella.scott@acme.com',
              Secret_Child_Name: 'Layla Graham',
              Secret_Child_EmailID: 'layla.graham@acme.com'
            },
            {
              Employee_Name: 'Charlie Ross',
              Employee_EmailID: 'charlie.ross@acme.com',
              Secret_Child_Name: 'Mark Lawrence',
              Secret_Child_EmailID: 'mark.lawrence@acme.com'
            },
            {
              Employee_Name: 'Hamish Murray',
              Employee_EmailID: 'hamish.murray.sr@acme.com',
              Secret_Child_Name: 'Hamish Murray',
              Secret_Child_EmailID: 'hamish.murray.jr@acme.com'
            },
            {
              Employee_Name: 'Piper Stewart',
              Employee_EmailID: 'piper.stewart@acme.com',
              Secret_Child_Name: 'Charlie Ross',
              Secret_Child_EmailID: 'charlie.ross.jr@acme.com'
            },
            {
              Employee_Name: 'Spencer Allen',
              Employee_EmailID: 'spencer.allen@acme.com',
              Secret_Child_Name: 'Charlie Wright',
              Secret_Child_EmailID: 'charlie.wright@acme.com'
            },
            {
              Employee_Name: 'Charlie Wright',
              Employee_EmailID: 'charlie.wright@acme.com',
              Secret_Child_Name: 'Hamish Murray',
              Secret_Child_EmailID: 'hamish.murray@acme.com'
            },
            {
              Employee_Name: 'Hamish Murray',
              Employee_EmailID: 'hamish.murray.jr@acme.com',
              Secret_Child_Name: 'Charlie Ross',
              Secret_Child_EmailID: 'charlie.ross@acme.com'
            },
            {
              Employee_Name: 'Charlie Ross',
              Employee_EmailID: 'charlie.ross.jr@acme.com',
              Secret_Child_Name: 'Matthew King',
              Secret_Child_EmailID: 'matthew.king@acme.com'
            },
            {
              Employee_Name: 'Ethan Murray',
              Employee_EmailID: 'ethan.murray@acme.com',
              Secret_Child_Name: 'Matthew King',
              Secret_Child_EmailID: 'matthew.king.jr@acme.com'
            },
            {
              Employee_Name: 'Matthew King',
              Employee_EmailID: 'matthew.king.jr@acme.com',
              Secret_Child_Name: 'Hamish Murray',
              Secret_Child_EmailID: 'hamish.murray.sr@acme.com'
            },
            {
              Employee_Name: 'Mark Lawrence',
              Employee_EmailID: 'mark.lawrence@acme.com',
              Secret_Child_Name: 'Isabella Scott',
              Secret_Child_EmailID: 'isabella.scott@acme.com'
            }
          ])).toBe(true)
    });

    expect(Validate.validateAssignment([
        {
          Employee_Name: 'Hamish Murray',
          Employee_EmailID: 'hamish.murray@acme.com'
        },
        {
          Employee_Name: 'Layla Graham',
          Employee_EmailID: 'layla.graham@acme.com'
        },
        {
          Employee_Name: 'Matthew King',
          Employee_EmailID: 'matthew.king@acme.com'
        },
        {
          Employee_Name: 'Benjamin Collins',
          Employee_EmailID: 'benjamin.collins@acme.com'
        },
        {
          Employee_Name: 'Isabella Scott',
          Employee_EmailID: 'isabella.scott@acme.com'
        },
        {
          Employee_Name: 'Charlie Ross',
          Employee_EmailID: 'charlie.ross@acme.com'
        },
        {
          Employee_Name: 'Hamish Murray',
          Employee_EmailID: 'hamish.murray.sr@acme.com'
        },
        {
          Employee_Name: 'Piper Stewart',
          Employee_EmailID: 'piper.stewart@acme.com'
        },
        {
          Employee_Name: 'Spencer Allen',
          Employee_EmailID: 'spencer.allen@acme.com'
        },
        {
          Employee_Name: 'Charlie Wright',
          Employee_EmailID: 'charlie.wright@acme.com'
        },
        {
          Employee_Name: 'Hamish Murray',
          Employee_EmailID: 'hamish.murray.jr@acme.com'
        },
        {
          Employee_Name: 'Charlie Ross',
          Employee_EmailID: 'charlie.ross.jr@acme.com'
        },
        {
          Employee_Name: 'Ethan Murray',
          Employee_EmailID: 'ethan.murray@acme.com'
        },
        {
          Employee_Name: 'Matthew King',
          Employee_EmailID: 'matthew.king.jr@acme.com'
        },
        {
          Employee_Name: 'Mark Lawrence',
          Employee_EmailID: 'mark.lawrence@acme.com'
        }
      ],[
        {
          Employee_Name: 'Hamish Murray',
          Employee_EmailID: 'hamish.murray@acme.com',
          Secret_Child_Name: 'Benjamin Collins',
          Secret_Child_EmailID: 'benjamin.collins@acme.com'
        },
        {
          Employee_Name: 'Layla Graham',
          Employee_EmailID: 'layla.graham@acme.com',
          Secret_Child_Name: 'Piper Stewart',
          Secret_Child_EmailID: 'piper.stewart@acme.com'
        },
        {
          Employee_Name: 'Matthew King',
          Employee_EmailID: 'matthew.king@acme.com',
          Secret_Child_Name: 'Matthew King',
          Secret_Child_EmailID: 'matthew.king@acme.com'
        },
        {
          Employee_Name: 'Benjamin Collins',
          Employee_EmailID: 'benjamin.collins@acme.com',
          Secret_Child_Name: 'Ethan Murray',
          Secret_Child_EmailID: 'ethan.murray@acme.com'
        },
        {
          Employee_Name: 'Isabella Scott',
          Employee_EmailID: 'isabella.scott@acme.com',
          Secret_Child_Name: 'Layla Graham',
          Secret_Child_EmailID: 'layla.graham@acme.com'
        },
        {
          Employee_Name: 'Charlie Ross',
          Employee_EmailID: 'charlie.ross@acme.com',
          Secret_Child_Name: 'Mark Lawrence',
          Secret_Child_EmailID: 'mark.lawrence@acme.com'
        },
        {
          Employee_Name: 'Hamish Murray',
          Employee_EmailID: 'hamish.murray.sr@acme.com',
          Secret_Child_Name: 'Hamish Murray',
          Secret_Child_EmailID: 'hamish.murray.jr@acme.com'
        },
        {
          Employee_Name: 'Piper Stewart',
          Employee_EmailID: 'piper.stewart@acme.com',
          Secret_Child_Name: 'Charlie Ross',
          Secret_Child_EmailID: 'charlie.ross.jr@acme.com'
        },
        {
          Employee_Name: 'Spencer Allen',
          Employee_EmailID: 'spencer.allen@acme.com',
          Secret_Child_Name: 'Charlie Wright',
          Secret_Child_EmailID: 'charlie.wright@acme.com'
        },
        {
          Employee_Name: 'Charlie Wright',
          Employee_EmailID: 'charlie.wright@acme.com',
          Secret_Child_Name: 'Hamish Murray',
          Secret_Child_EmailID: 'hamish.murray@acme.com'
        },
        {
          Employee_Name: 'Hamish Murray',
          Employee_EmailID: 'hamish.murray.jr@acme.com',
          Secret_Child_Name: 'Charlie Ross',
          Secret_Child_EmailID: 'charlie.ross@acme.com'
        },
        {
          Employee_Name: 'Charlie Ross',
          Employee_EmailID: 'charlie.ross.jr@acme.com',
          Secret_Child_Name: 'Spencer Allen',
          Secret_Child_EmailID: 'spencer.allen@acme.com'
        },
        {
          Employee_Name: 'Ethan Murray',
          Employee_EmailID: 'ethan.murray@acme.com',
          Secret_Child_Name: 'Matthew King',
          Secret_Child_EmailID: 'matthew.king.jr@acme.com'
        },
        {
          Employee_Name: 'Matthew King',
          Employee_EmailID: 'matthew.king.jr@acme.com',
          Secret_Child_Name: 'Hamish Murray',
          Secret_Child_EmailID: 'hamish.murray.sr@acme.com'
        },
        {
          Employee_Name: 'Mark Lawrence',
          Employee_EmailID: 'mark.lawrence@acme.com',
          Secret_Child_Name: 'Isabella Scott',
          Secret_Child_EmailID: 'isabella.scott@acme.com'
        }
      ])).toBe(false)
})
