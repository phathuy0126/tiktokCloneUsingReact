import ReactFullpage from '@fullpage/react-fullpage';
import { createContext, useState } from 'react';
import Post from '../components/Post';

const ContextfullpageApi = createContext();

const arrayposts = [
    {
        avatar: 'https://s120-ava-talk.zadn.vn/d/9/9/0/31/120/687f42aa2e8b086705243a1dbc20eccf.jpg',
        name: 'NickName',
        idName: 'huydangcode',
        discription: 'Đây là mô tả',
        like: 389,
        comment: 36,
        share: 21,
        music: 'Nhạc đang phát',
        video: 'https://phathuy0126.github.io/Tiktok/video/hotgirl.mp4'    
    },
    {
        avatar: 'https://phathuy0126.github.io/Tiktok/video/girl7.mp4',
        name: 'NickName',
        idName: 'huydangcode',
        discription: 'Đây là mô tả',
        like: 389,
        comment: 36,
        share: 21,
        music: 'Nhạc đang phát',
        video: 'https://phathuy0126.github.io/Tiktok/video/girl2.mp4'    
    },
    {
        avatar: 'https://s120-ava-talk.zadn.vn/d/9/9/0/31/120/687f42aa2e8b086705243a1dbc20eccf.jpg',
        name: 'NickName',
        idName: 'huydangcode',
        discription: 'Đây là mô tả',
        like: 389,
        comment: 36,
        share: 21,
        music: 'Nhạc đang phát',
        video: 'https://phathuy0126.github.io/Tiktok/video/girl3.mp4'    
    },
    {
        avatar: 'https://s120-ava-talk.zadn.vn/d/9/9/0/31/120/687f42aa2e8b086705243a1dbc20eccf.jpg',
        name: 'NickName',
        idName: 'huydangcode',
        discription: 'Đây là mô tả',
        like: 389,
        comment: 36,
        share: 21,
        music: 'Nhạc đang phát',
        video: 'https://phathuy0126.github.io/Tiktok/video/girl4.mp4'    
    },
    {
        avatar: 'https://s120-ava-talk.zadn.vn/d/9/9/0/31/120/687f42aa2e8b086705243a1dbc20eccf.jpg',
        name: 'NickName',
        idName: 'huydangcode',
        discription: 'Đây là mô tả',
        like: 389,
        comment: 36,
        share: 21,
        music: 'Nhạc đang phát',
        video: 'https://phathuy0126.github.io/Tiktok/video/girl6.mp4'    
    }
]

const FullPage = () => {
    const [posts, setPosts] = useState(arrayposts);
    // useEffect(() => {
    //     db.collection('posts').get().then(snapshot => {
            
    //         console.log(snapshot);
    //     });
    // }, [])

    return <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={800} /* Options here */

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <ContextfullpageApi.Provider value={fullpageApi}>
                        {posts.map((post, index) => {
                            return <Post key={index} {...post} />
                        })}
                        {/* <Post 
                            avatar="" 
                            comment=""
                            discription=""
                            idName=""
                            like=""
                            music=""
                            name=""
                            share=""
                            video=""
                        />                         */}
                    </ContextfullpageApi.Provider>
                </ReactFullpage.Wrapper>
            );
        }}
    />
};

export { ContextfullpageApi };
export default FullPage