import React, { useState, useCallback } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function Container() {

  const [age,setAge] = useState(1);
  const [salary,setSalary] = useState(1000);

  const ageIncrement = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const salaryIncrement = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])
   
  return (
    <div>
      <Title/>
      <Count value="age" count={age}/>
      <Button value='Increment age' click={ageIncrement}/>
      <Count value="salary" count={salary}/>
      <Button value='Increment salary' click={salaryIncrement}/>
    </div>
  )
}

export default Container