import React from 'react';
import cl from '../styles/Contact.module.css';
import image from '../img/coffee_phone.png';
import emailImage from '../img/email.svg';
import chatImage from '../img/chat.svg';
import tg from '../img/Telegram_logo.svg';
import inst from '../img/instagram.png';
import discord from '../img/discord.svg';

const Contact = () => {
  return (
    <div className={cl.contact}>
      <div className={cl.header}>
        <div className={cl.header_body}>
          <h1 className={cl.title}>Get in touch</h1>
          <p className={cl.header_text}>
            Want to get in touch? I'd love to hear from you. Here's how you can reach me...
          </p>
        </div>
        <div className={cl.header_image}>
          <img src={image} alt="coffee phone" />
        </div>
      </div>
      <div className={cl.contacts}>
        <div className={cl.contacts_item}>
          <img src={emailImage} alt="email image" />
          <h2 className={cl.item_title}>Mail me</h2>
          <p className={cl.item_text}>Wish to contact me? Just send a message to my gmail.</p>
          <div className={cl.socials_body}>
            <h3>frontenddevjscript@gmail.com</h3>
          </div>
        </div>
        <div className={cl.contacts_item}>
          <img src={chatImage} alt="email image" />
          <h2 className={cl.item_title}>Socail media</h2>
          <p className={cl.item_text}>Also you can contact me in my social media.</p>
          <div className={cl.socials_body}>
            <ul className={cl.socials}>
              <li>
                <a href="https://t.me/maksymdosiuk">
                  <img src={tg} alt="telegram logo" />
                </a>
              </li>
              <li>
                <a href="https://ig.me/m/781calmstate">
                  <img src={inst} alt="instagram logo" />
                </a>
              </li>
              <li>
                <a href="https://discordapp.com/users/341635834493140992">
                  <img src={discord} alt="discord logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
