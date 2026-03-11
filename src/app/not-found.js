export default function NotFound() {
    return (
        <div class="w-screen h-screen bg-black flex flex-col justify-center items-center">
            <div class="w-96 h-48 bg-white flex flex-col justify-center items-center rounded-xl">
                <div class="text-4xl text-black font-bold">Oops!</div>
                <div class="text-sm text-black mt-2 "> 404 Page Not FOUND</div>
                <p className="text-sm text-black mt-2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan mi in ligula ultricies, eu fringilla mi condimentum.  </p>
                <button class="w-24 h-8 bg-blue-400 text-white text-m rounded-2xl">Go back</button>
            </div>
            <p class="text-5xl text-white mt-20">Уучлаарай хуудас олдсонгүй!  Та бидэнтэй холбогдоно уу.</p>
        </div>
    )
}