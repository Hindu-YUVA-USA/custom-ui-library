import React from 'react'

/* 
TailwindCSS does not support string interpolation.
Each class should be a fully formed string
So, we will define variables to dynamically style components based on provided props
*/


// Props this component will take
type ButtonProps = {
    text: string,
    color: string
}

//Type of the variants
type variantStyle = {
  [s: string] : string,
}

//Defining styles for each variant
const variantStyles: variantStyle = {
  primary: `bg-[#053a58]`,
  secondary: `bg-[#053a58]`,
  black: `bg-black`
}

//Defining the react component
const Button: React.FC<ButtonProps>= ({text, color} : ButtonProps) => {
  return (
    <button className={`${variantStyles[color]} text-white rounded-md px-7 py-5 text-xl`}>
      {text}
    </button>
  )
}

export default Button