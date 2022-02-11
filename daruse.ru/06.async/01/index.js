'use strict';

const func = (num, cb=def) => {
  setTimeout(() => {
    console.log(num);
    num += 1;
    cb(num);
  }, 1000);
}

const def = () => {
  console.log('done');
}
func(1, (n) => {
  func(n, (n) => {
    func(n, (n) => {
        func(n, (n) => {
          func(n, (n) => {
              func(n, (n) => {
                func(n, (n) => {
                  func(n, (n) => {
                      func(n, (n) => {
                        func(n)
                      });
                  })
                })
              });
          })
        })
      })
    })
  });

