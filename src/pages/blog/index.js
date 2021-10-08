import React from 'react'

import Layout from '../../components/Layout'
import SingleAd from '../../components/SingleAd/SingleAd'
import JustTitlePostDate from '../../components/JustTitlePostDate/JustTitlePostDate'
import NewsLetterBlock from '../../components/NewsLetterBlock/NewsLetterBlock'
import './blog.css'
import TextTitleDate from '../../components/TextTitleDate/TextTitleDate'
import PrevNextPost from '../../components/PrevNextPost/PrevNextPost'
import SingleAuthorPost from '../../components/SingleAuthorPost/SingleAuthorPost'
import RelatedPost from '../../components/RelatedPost/RelatedPost'
import google_ad from '../../img/google_ad.png'
import coment from '../../img/coment.png'




export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='container'>
         <SingleAd />
         <div className='trending_truth_row'>
         <div className='column is-8 trending_truth_left_panel'>
      <TextTitleDate />
      <PrevNextPost />     
      <SingleAuthorPost />
      <div className='related_post_title'>
      <div class="Top_News"><h2>Related Posts</h2></div>
      <div className='cv'>
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      <RelatedPost />
      </div>
      </div>
      <img src={google_ad}  style={{width:'100%'}}/>
      <img src={coment}  style={{width:'100%', margin: '30px 0 40px 0'}}/>
         </div>
         <div className='column is-4 trending_truth_right_panel'>
         <div class="Top_News"><h2>TopNews</h2></div> 
         <div className='right_side_bannerAd'>
        <JustTitlePostDate />
        <JustTitlePostDate />
        <SingleAd />
        <JustTitlePostDate />
        <JustTitlePostDate />
        <NewsLetterBlock />
        <SingleAd />
     
        <div className='trending_truth_row_ad_height'><SingleAd /></div>
        </div>
         </div>
         </div>
         </div>
      </Layout>
    )
  }
}
