import React from 'react'
import bgimage from '../assets/Backgeound.png'
import Populararticles from './Populararticles'
import Rocket from '../assets/Rocket.png'
import gift from '../assets/Gift.png'
import Keyboard from '../assets/Keyboard.png'
import Knowledgebase from './Knowledgebase'
import alpha from '../assets/alpha.png'
import img18 from '../assets/icon (6).png'
import img19 from '../assets/icon (7).png'
import img20 from '../assets/icon (8).png'
import img21 from '../assets/icon (9).png'
import img22 from '../assets/icon (10).png'
import img23 from '../assets/Laptop.png'
import img24 from '../assets/Lightbulb.png'
import img25 from '../assets/Discord.png'
import Slidebar from './Slidebar'



export default function Centerbar() {
  return (
    <div>
        <input  style={{height:64,width:1132,marginLeft:14,marginTop:12,}} placeholder='Search (Ctrl+/)'  type="text" name="" id=""  />
        <div style={{backgroundImage:"url("+bgimage+")", height:320,marginLeft:15,marginTop:24}}>
          <h1 style={{color:'#32475C',marginLeft:418,paddingTop:78}}>Hello, how can we help?</h1>
          <input style={{height:54,width:450,marginLeft:378,marginTop:28,}} placeholder='Ask a question....' type="text" name="" id="" />
          <p style={{marginLeft:418,paddingTop:18,color:'#32475C'}}>or choose a category to quickly find the help you need</p>
        </div>
        <h1 style={{color:'#32475C',textAlign:'center'}}>Popular Article</h1>

        <div style={{display:'flex' ,gap:40,marginTop:136,marginLeft:80}}>
         
          <Populararticles Rocket={Rocket} htag={'Getting Started'} ptag={'Whether youre new or youre a power user, this article will'}
          textcolor={'#32475C'} htagcolor={'#32475C'} buttoncolor={'#32475C'}/>

          <Populararticles Rocket={gift} htag={'First Steps'} ptag={'Are you a new customer wondering how to get started?'}
          textcolor={'#32475C'} htagcolor={'#32475C'} buttoncolor={'#32475C'}/>

          <Populararticles Rocket={Keyboard} htag={'Add External Content'} ptag={'This article will show you how to expand the functionality of the App.'}
          textcolor={'#32475C'} htagcolor={'#32475C'} buttoncolor={'#32475C'}/>
        </div>
        <h1 style={{color:'#32475C',marginTop:80,textAlign:'center'}}>Knowledge Base</h1>
        <div style={{display:'flex',gap:50,marginTop:34,marginLeft:80}}>
          
          <Knowledgebase alpha={alpha} htag={'Getting Started'} li={'Account'} li2={'Authentication'} li3={'Billing'} ptag={'14 Articles'}/>
          <Knowledgebase alpha={img18} htag={'Orders'} li={'Processing orders'} li2={'Payments'} li3={'Returns, Refunds and Replacements'} ptag={'13 Articles'}/>
          <Knowledgebase alpha={img19} htag={'Safety and security'} li={'Security and hacked accounts'} li2={'Privacy'} li3={'Spam and fake accounts'} ptag={'9 Articles'}/>
        </div>

        <div style={{display:'flex',gap:50,marginTop:34,marginLeft:80}}>
          
          <Knowledgebase alpha={img20} htag={'Rules and policies'} li={'General'} li2={'Intellectual property'} li3={'Guidelines for law enforcement'} ptag={'14 Articles'}/>
          <Knowledgebase alpha={img21} htag={'Chats'} li={'General'} li2={'Features'} li3={'Encryption'} ptag={'14 Articles'}/>
          <Knowledgebase alpha={img22} htag={'Connections'} li={'Conversations'} li2={'Jobs'} li3={'People'} ptag={'14 Articles'}/>
        </div>

        <h1 style={{textAlign:'center',marginTop:80 ,color:'#32475C'}}>Popular Articles</h1>

      <div style={{display:'flex' ,marginLeft:80 ,marginTop:34, gap:40}}>
         <Populararticles Rocket={img23} htag={'Blogging'} ptag={'Expert tips & tools to improve your website or online store using blog.'}
          textcolor={'#32475C'} htagcolor={'#32475C'} buttoncolor={'#32475C'}/>

         <Populararticles Rocket={img24} htag={'Inspiration Center'} ptag={'Inspiration from experts to help you start and grow your big ideas.'}
          textcolor={'#32475C'} htagcolor={'#32475C'} buttoncolor={'#32475C'}/>

           <Populararticles Rocket={img25} htag={'Community'} ptag={'A group of people living in the same place or having a particular.'}
          textcolor={'#32475C'} htagcolor={'#32475C'} buttoncolor={'#32475C'}/>
      </div>
        

        <div style={{width:1132,height:304,marginLeft:24}}>
          <h1 style={{textAlign:"center" ,paddingTop:80,color:'#32475C'}}>Still need help?</h1>
          <p style={{width:500,textAlign:'center',paddinTop:10,marginLeft:330,color:'#32475C'}}>Our specialists are always happy to help. Contact us during standard business hours or email us 24/7, and we'll get back to you.</p>
          <div style={{display:'flex' ,marginTop:35,gap:30,marginLeft:430}}>
            <button style={{backgroundColor:'#696CFF',color:'white',height:30}}>Visit our community</button>
            <button style={{backgroundColor:'#696CFF',color:'white',height:30}}>Contact us</button></div>
        </div>

        <div>
          
        </div>
    </div>
  )
}
