const InfoCard = () => {
  return (
    <div className="w-full h-full rounded-xl border-4 border-transparent bg-black bg-opacity-30 px-2 hover:border-sky-500 hover:bg-sky-900 hover:bg-opacity-30">
      <p className="text-center text-4xl font-bold text-sky-500">Title</p>
      <div className="flex justify-center px-4">
        <div className="h-full w-full rounded-xl border-4 border-sky-700">
          <p className="my-10 text-center text-4xl font-bold text-sky-500">
            Picture
          </p>
        </div>
      </div>
      <p className="mt-2 text-4xl font-bold text-sky-500">Description:</p>
      <p className="ml-3 text-2xl font-bold text-sky-500">yadda yadda yaa</p>
      <p className="mt-2 text-4xl font-bold text-sky-500">Technologies:</p>
      <p className="ml-3 text-2xl font-bold text-sky-500">etc etc etc</p>
    </div>
  )
}

export default InfoCard
