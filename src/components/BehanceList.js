import React from 'react'
import { behanceItem } from '../Data'
import { AiFillFolderOpen } from 'react-icons/ai'

const BehanceList = () => {
    return (
        <section>
            <div className="container-fluid px-4">

                <div className="grid md:grid-cols-3 lg:grid-cols-5  sm:grid-cols-2 gap-3 py-5">
                    {
                        behanceItem.map((item) => (
                            <div className="category-item cursor-pointer">
                                <div className="cat-img relative overflow-hidden rounded-md">
                                    <div className="bg-overlay"></div>
                                    <img src={item.featureImg} alt={item.featureImg} />
                                    <div className="save-file flex items-center absolute cursor-pointer top-2 left-2 py-2 px-3 bg-black/50 rounded-full">
                                        <div className="s-icon text-white text-sm pr-1">
                                            <AiFillFolderOpen />
                                        </div>
                                        <span className='text-white text-xs font-medium'>Save</span>
                                    </div>
                                    <div className="patch absolute top-0 hover:translate-y-[-5px] cursor-pointer translate-y-[-10px] right-2">
                                        <img src={item.fePatch} alt="" />
                                    </div>
                                </div>
                                <div className="cat-info flex justify-between py-3">
                                    <div className="cat-name  cursor-pointer">
                                        <h4 className='font-medium text-sm hover:underline leading-[15px] text-ellipsis'>{item.featureTxt}</h4>
                                        <span className='text-sm hover:underline'>{item.feUser}</span>
                                    </div>
                                    <div className="be-time flex">
                                        <div className="be-like flex mr-2">
                                            <div className="li-icon text-[#959595] mr-1 mt-[2px]">
                                                {item.felikeIcons}
                                            </div>
                                            <span className='text-sm font-medium text-[#959595]'>{item.feLike}</span>
                                        </div>
                                        <div className="be-watch flex mr-2">
                                            <div className="wa-icon text-[#959595] mr-1 mt-[2px]">
                                                {item.fewatchIcon}
                                            </div>
                                            <span className='text-sm font-medium text-[#959595]'>{item.feWatch}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default BehanceList