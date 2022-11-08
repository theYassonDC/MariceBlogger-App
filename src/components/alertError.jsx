function ErrorAlert({ message }) {

  return (
    <>
      <div className='bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 w-1/2 ml-auto mr-auto'>{message}</div>
    </>
  )
}

export default ErrorAlert