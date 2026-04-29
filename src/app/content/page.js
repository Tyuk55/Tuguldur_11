"use client" ;

import { useRouter } from "next/navigation"

export default function ContentPage() {
    const router = useRouter();
    return (
        <div class="w-screen h-screen bg-pink-300">
            <div class="w-full h-16 bg-white flex justify-between items-center">
                <div class="w-96 h-16 flex justify-between items-center">
                    <button className="w-36 h-16 bg-blue-300" onClick={() => router.back()}>
                         Back
                    </button>
                    <div class="w-32 h-16 flex justify-center items-center text-black">About our factory</div>
                    <div class="w-24 h-16 flex justify-center items-center text-black">Blog</div>
                    <div class="w-24 h-16 flex justify-center items-center text-black">Contacts</div>
                    <div class="w-16 h-16 flex justify-center items-center text-black">News</div>
                </div>
                <img className="w-16 h-16" src="data:image/png;base64,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" alt=""></img>
                <div class="w-48 h-16 flex  justify-around items-center">
                    <div class="w-20 h-16 flex justify-center items-center text-black">Sign in</div>
                    <div class="w-20 h-16 flex justify-center items-center text-black">Sign Up</div>
                </div>
            </div>
            <div class="w-full h-12 flex justify-center items-center bg-gray-100">
                <div class="w-24 h-12 flex justify-center items-center text-black">Bracelets</div>
                <div class="w-24 h-12 flex justify-center items-center text-black">Necklaces</div>
                <div class="w-24 h-12 flex justify-center items-center text-black">Rings</div>
                <div class="w-24 h-12 flex justify-center items-center text-black">Earrings</div>
                <div class="w-24 h-12 flex justify-center items-center text-black">Chains</div>
                <div class="w-24 h-12 flex justify-center items-center text-black">Pendants</div>
            </div>
            <div class="w-full h-96 bg-white flex">
                <img class="w-2/5 h-full" src="https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.jpg?s=612x612&w=0&k=20&c=miNpkI_ekZ8HoC0U9NhHNacsgcdq8xIFxR-n0zjO5p8=" alt=""></img>
                <div class="w-3/5 h-full text-4xl flex flex-col justify-center items-center">
                    <div class="text-4xl  text-black">Create your unique piece of jewelry!</div>
                    <div class="text-xl p-16  text-black">Choose precious metals, exquisite stone , and custom designs to bring your dream to life in the perfect accessory.</div>
                </div>
            </div>
            <div class="w-full h-52 bg-white flex justify-around items-center">
                <div class="w-36 h-36 flex justify-center items-center border-[3px] border-black shadow-3 m-4 bg-gray-200">
                    <img class="w-24 h-24" src="https://www.vancleefarpels.com/content/dam/rcq/vca/8J/BT/Qn/BS/Ry/-8/29/2W/ge/Sg/Lw/8JBTQnBSRy-8292WgeSgLw.png" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://images.shaneco.com/is/image/ShaneCo/necklace/570/jewelry_41107089_M.jpg&&wid=999&hei=999&fmt=png-alpha" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://jamesmichelle.com/cdn/shop/files/ChunkyChainCrossNecklace-A_70156ae6-f501-4627-b29e-5885c2f5a473.png?v=1754144488&width=1445" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] border-black shadow-3 m-4 bg-gray-200">
                    <img class="w-24 h-24" src="https://images.shaneco.com/is/image/ShaneCo/necklace/570/jewelry_41096973_M.jpg&&wid=999&hei=999&fmt=png-alpha" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://classa.com.au/cdn/shop/files/Starlight-Necklace-G-Aquamarine.png?crop=center&height=1200&v=1764546915&width=1000" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://silvermoonnz.myshopify.com/cdn/shop/files/guiding-star-necklace-18k-gold-vermeil-front.-web2_1250x_d439ec2f-b25e-406d-9275-9e6bfba4d1bd.webp" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] border-black shadow-3 m-4 bg-gray-200">
                    <img class="w-24 h-24" src="https://www.paspaley.com/cdn/shop/files/Lavalier_Pearl_Necklace_with_15mm_Circle_Pearl_-_Yellow_Gold_DH13N01Y83C_1500_x_1875_C_2.png?v=1721804032&width=2048" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://www.thomassabo.com/dw/image/v2/AAQY_PRD/on/demandware.static/-/Sites-ts-master-catalog/default/dw33485b7a/product/K/KE/KE2367/KE2367-051-10.png?sw=328&sfrm=png" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://cdn.accentuate.io/43393648132341/1667214271863/Ada_YG_Front_Chain.png?v=1755602135290&transform=cover=1:1/resize=1024" alt="" />
                </div>
            </div>
            <div class="w-full h-52 bg-white flex justify-around items-center">
                <div class="w-36 h-36 flex justify-center items-center border-[3px] border-black shadow-3 m-4 bg-gray-200">
                    <img class="w-24 h-24" src="https://www.vancleefarpels.com/content/dam/rcq/vca/8J/BT/Qn/BS/Ry/-8/29/2W/ge/Sg/Lw/8JBTQnBSRy-8292WgeSgLw.png" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://images.shaneco.com/is/image/ShaneCo/necklace/570/jewelry_41107089_M.jpg&&wid=999&hei=999&fmt=png-alpha" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://jamesmichelle.com/cdn/shop/files/ChunkyChainCrossNecklace-A_70156ae6-f501-4627-b29e-5885c2f5a473.png?v=1754144488&width=1445" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] border-black shadow-3 m-4 bg-gray-200">
                    <img class="w-24 h-24" src="https://images.shaneco.com/is/image/ShaneCo/necklace/570/jewelry_41096973_M.jpg&&wid=999&hei=999&fmt=png-alpha" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://classa.com.au/cdn/shop/files/Starlight-Necklace-G-Aquamarine.png?crop=center&height=1200&v=1764546915&width=1000" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://silvermoonnz.myshopify.com/cdn/shop/files/guiding-star-necklace-18k-gold-vermeil-front.-web2_1250x_d439ec2f-b25e-406d-9275-9e6bfba4d1bd.webp" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://www.paspaley.com/cdn/shop/files/Lavalier_Pearl_Necklace_with_15mm_Circle_Pearl_-_Yellow_Gold_DH13N01Y83C_1500_x_1875_C_2.png?v=1721804032&width=2048" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://www.thomassabo.com/dw/image/v2/AAQY_PRD/on/demandware.static/-/Sites-ts-master-catalog/default/dw33485b7a/product/K/KE/KE2367/KE2367-051-10.png?sw=328&sfrm=png" alt="" />
                </div>
                <div class="w-36 h-36 flex justify-center items-center border-[3px] shadow-3 m-4 border-black bg-gray-200">
                    <img class="w-24 h-24" src="https://cdn.accentuate.io/43393648132341/1667214271863/Ada_YG_Front_Chain.png?v=1755602135290&transform=cover=1:1/resize=1024" alt="" />
                </div>
            </div>
        </div>
    )
}    