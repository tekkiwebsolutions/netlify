import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import SingleAd from '../../components/SingleAd/SingleAd'
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy'
import NewsLetterBlock from '../../components/NewsLetterBlock/NewsLetterBlock'




function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <div className='container'>
      <SingleAd />
      <div className='privacy_policy_right'>
      <div className='column is-8'>
      <PrivacyPolicy />
      <PrivacyPolicy />
      <PrivacyPolicy />
      </div>
      <div className='column is-4'>
      <div className='Breaking_New'>
    <h2>Breaking News</h2>
    <h1>West Java to review Meykardah project amid alleged bribery case</h1>
    </div>
    <NewsLetterBlock />
    <SingleAd />
      </div>
      </div>
        </div>
      </Layout>
    )
  }
}
