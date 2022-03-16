import React from 'react'
import { useState, useRef, useContext } from 'react';
import { BiChevronUp, BiChevronDown, BiMusic, BiHeart, BiMessageRoundedDots, BiShare } from 'react-icons/bi';
import { ContextfullpageApi } from '../containers/FullPage';

const HeaderPost = ({ name, idName, description, avatar, music }) => {
    return (
        <div>
            <div className='flex items-center'>
                <div className='max-h-[50px] max-w-[50px] rounded-full overflow-hidden mr-3'>
                    <img
                        className='w-full h-full object-cover'
                        src={avatar} alt='avatar' />
                </div>
                <div>
                    <div>
                        <span className='font-medium text-lg mr-2'>{name}</span>
                        <span>{idName}</span>
                    </div>
                    <div>
                        <span className='mr-2'>{description}</span>
                        <span className='font-medium'>#xuhuong</span>
                    </div>
                    <div className='flex items-center'>
                        <BiMusic className='mr-2' />
                        <span className='font-medium'>{music}</span>
                    </div>
                </div>
                <div className='ml-4 flex-1'>
                    <button className='p-1 px-3 rounded-md border-2 border-[#ff8383] outline-none'>Theo dõi</button>
                </div>
            </div>
        </div>
    )
}

const ContainerPost = ({ video, like, comment, share }) => {
    const [playing, setPlaying] = useState(false);
    const [activeHeart, setActiveHeart] = useState(false);
    const [activeCmt, setActiveCmt] = useState(false);
    const [activeShare, setActiveShare] = useState(false);
    const videoRef = useRef(null);
    const fullpageApi = useContext(ContextfullpageApi);

    // useEffect(() => {
    //     const section = document.querySelector('.section');
    //     console.log(section);
    //     if(section.classList.contains('active')) {
    //         section.querySelector('video').play();
    //     }        
    // }, [])

    const handleVideo = () => {
        setPlaying(!playing);
        if (playing) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        } else {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }

    const handleHeart = () => {
        setActiveHeart(!activeHeart);
    }

    const handleCmt = () => {
        setActiveCmt(!activeCmt);
    }

    const handleShare = () => {
        setActiveShare(!activeShare);
    }

    const handleNext = () => {
        fullpageApi.moveSectionUp()
        fullpageApi.getActiveSection().item.querySelector('video').play();
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }

    const handlePrev = () => {
        fullpageApi.moveSectionDown()
        fullpageApi.getActiveSection().item.querySelector('video').play();
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    }

    return (
        <div className='flex mt-3'>
            <div className='mr-4 flex flex-col justify-end mb-4'>
                <div
                    onClick={handleNext}
                    className='p-3 bg-slate-200 rounded-full text-2xl mb-3 cursor-pointer'>
                    <BiChevronUp />
                </div>
                <div
                    onClick={handlePrev}
                    className='p-3 bg-slate-200 rounded-full text-2xl mb-3 cursor-pointer'>
                    <BiChevronDown />
                </div>
            </div>
            <div className='max-w-[300px] max-h-[80vh] overflow-hidden mr-4'>
                <video
                    onClick={handleVideo}
                    ref={videoRef}
                    className='object-cover w-full h-full cursor-pointer'
                    loop
                    src={video}>
                </video>
            </div>
            <div className='flex flex-col justify-end mb-4'>
                <div className='mb-3 flex flex-col items-center'>
                    <div onClick={handleHeart}
                        className={`
                    transition-all p-3 bg-slate-200 rounded-full text-2xl cursor-pointer
                    ${activeHeart ? 'bg-red-300 text-red-600' : ''}
                `}>
                        <BiHeart />
                    </div>
                    <p>{activeHeart ? like + 1 : like}</p>
                </div>
                <div className='mb-3 flex flex-col items-center'>
                    <div onClick={handleCmt}
                        className={`
                    transition-all p-3 bg-slate-200 rounded-full text-2xl cursor-pointer
                    ${activeCmt ? 'text-red-600' : ''}
                    `}>
                        <BiMessageRoundedDots />
                    </div>
                    <p>{comment}</p>
                </div>
                <div className='mb-3 flex flex-col items-center'>
                    <div onClick={handleShare} className={`
                        transition-all p-3 bg-slate-200 rounded-full text-2xl cursor-pointer
                        ${activeShare ? 'text-red-600' : ''}
                    `}>
                        <BiShare />
                    </div>
                    <p>{share}</p>
                </div>

            </div>
        </div>
    )
}

const Post = ({ avatar, comment, discription, idName, like, music, name, share, video, }) => {
    return (
        <div className='section h-[100vh]'>
            <HeaderPost
                avatar={avatar}
                name={name}
                idName={idName}
                discription={discription}
                music={music}
            />
            <ContainerPost
                video={video}
                like={like}
                comment={comment}
                share={share}
            />
        </div>
    )
}

export default Post
