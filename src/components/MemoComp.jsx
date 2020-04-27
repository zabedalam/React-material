import React from 'react';

 function MemoComp({name}) {
  return (
    <>
   from memo component {name}
    </>
  );
}
export default React.memo(MemoComp)