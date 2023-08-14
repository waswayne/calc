export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
    'div' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
    'mul' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
    'sub' : IDL.Func([IDL.Int, IDL.Int], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };
