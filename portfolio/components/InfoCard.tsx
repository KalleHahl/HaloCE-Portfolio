const InfoCard = () => {
  return (
    <div className="w-[400px] rounded-xl border-4 border-transparent bg-black bg-opacity-30 px-2 hover:border-sky-500 hover:bg-sky-900 hover:bg-opacity-30">
      <p className="text-center text-4xl font-bold text-sky-500">You</p>
      <div className="flex justify-center">
        <div className="h-48 w-48 rounded-xl border-4 border-sky-700"></div>
      </div>
      <p className="mt-2 text-4xl font-bold text-sky-500">Controls:</p>
      <p className="ml-3 text-2xl font-bold text-sky-500">Default</p>
      <p className="mt-2 text-4xl font-bold text-sky-500">Controls:</p>
      <p className="ml-3 text-2xl font-bold text-sky-500">Default</p>
      <p className="mt-2 text-4xl font-bold text-sky-500">Current Level:</p>
      <p className="ml-3 text-2xl font-bold text-sky-500">Default</p>
    </div>
  )
}

export default InfoCard
