import { Feature } from '../../components';
import './WhatGPT3.css';

function WhatGPT3() {
  return <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature'>
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message delight. Whole front do of plate heard oh ought. His defective nore convinced residenced own. Connection has ut impossible own apartments boisteroud. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. "
      />
    </div>
    <div className='gpt3__whatgpt3-heading'>
      <h1 className='gradient__text'>
        The Possibilities are beyond your imagination
      </h1>
      <p>Explore The Libarary</p>
    </div>
    <div className='gpt3__whatgpt3-container'>
      <Feature
        title="Chatbots"
        text="We so opinion friends me message delight. Whole front do of plate heard oh ought." />
      <Feature
        title="Knowledgebase"
        text="At jointures ladyship an insisted so himanity he. Friendly bachelor entrance to on by. As put impossible own aprtment b" />
      <Feature title="Education"
        text="At jointures ladyship an insisted so himanity he. Friendly bachelor entrance to on by. As put impossible own aprtment b" />
    </div>
  </div>
}

export default WhatGPT3;