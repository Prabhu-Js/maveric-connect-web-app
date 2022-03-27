import React from 'react';
import Footer from '../../components/Footer';
import HeaderTwo from '../../components/HeaderTwo';
import PostListItems from '../../components/PostListItem';

const PostListsPage = () => {
    return(
        <div>
            <HeaderTwo />
            <PostListItems />
            <Footer />
        </div>
    )
}

export default PostListsPage;