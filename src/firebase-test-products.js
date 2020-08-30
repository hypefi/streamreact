import React from "react";
import { db } from './config.js';
import { useObject } from "react-firebase-hooks/database";


const DatabaseValue = () => {
  const [value, loading, error] = useObject(db.ref('value'));

  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Value: Loading...</span>}
        {value && <span>Value: {value.val()}</span>}
      </p>
    </div>
  );
};