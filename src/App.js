import "./App.css";
import { useState } from "react";
import MainBar from './components/MainBar';
import InputBar from './components/InputBar';
import Suggestion from './components/Suggestion';
import Objectives from './components/Objectives';
import Vector from "./assests/Vector.png";
import EnterIcon from "./assests/enter-icon.svg";
import logo from "./assests/logo.png";
import LowerSidebarVector from "./assests/Lower-Sidebar-Vector.png";
import PlusIcon from "./assests/plus-icon.svg";
import MsgIcon from "./assests/msg-icon.svg";
import UserOutlined from "./assests/Symbol.svg";

function App() {
  const [messages, setMessages] = useState([]);
  const [recentChats, setRecentChats] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [content, setContent] = useState([]);
  // const [input, setInput] = useState("");
  const [activeChat, setActiveChat] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        text: newMessage,
        sender: "user",
      };

      message.style = {
        marginBottom: "10px",
      };

      setMessages([...messages, message]);
      setNewMessage("");
      updateRecentChats(newMessage);
    }
  };

  const updateRecentChats = (message) => {
    if (recentChats.length >= 5) {
      recentChats.pop(); // Limit the number of recent chats to 5
    }
    const trimmedMessage = message.split(" ").slice(0, 3).join(" ");
    const trimmedMessageWithDots = `${trimmedMessage}...`;
    setRecentChats([
      {
        text: trimmedMessageWithDots,
        icon: <img src={MsgIcon} alt="Message Icon" className="msg-icon" />,
      },
      ...recentChats,
    ]);

    const handleInputKeyPress = (e) => {
      // Check if Enter key (key code 13) is pressed
      if (e.key === "Enter") {
        handleSendMessage();
      }
    };
  };

  const startNewChat = () => {
    const newChatSession = {
      id: Date.now(), // You can use a unique identifier
      messages: [],
    };

    setMessages([]); // Clear previous chat messages
    setActiveChat(newChatSession); // Set this chat session as active
  };

  // const chat = [
  //   {
  //     role: "user",
  //     message: "I want to know how to use Tailwind CSS",
  //   },
  //   {
  //     role: "assistant",
  //     message: "I can help you with that. Here are some examples.",
  //   },
  //   {
  //     role: "user",
  //     message: "How to use Tailwind CSS with React",
  //   },
  //   {
  //     role: "assistant",
  //     message:
  //       "Here is and example: https://tailwindcss.com/docs/guides/create-react-app",
  //   },
  //   {
  //     role: "user",
  //     message: "What is Lorem Ipsume?",
  //   },
  //   {
  //     role: "assistant",
  //     message:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a quae id ipsum, reiciendis modi recusandae facilis iusto commodi quo deleniti assumenda placeat et ducimus iste maiores labore eligendi harum mollitia vero tenetur perspiciatis fugit non facere. Magnam totam voluptatibus aspernatur? Rem, accusantium similique unde eveniet officia cum alias iure? Distinctio vitae minima dicta explicabo voluptatibus sapiente eaque doloribus ipsa mollitia! Quo, fuga! Aspernatur doloremque odit, ratione accusamus doloribus molestias ex incidunt odio autem est sit, et aut laborum, sapiente nemo. Accusantium laboriosam voluptatum debitis? Recusandae consequatur labore repudiandae doloribus voluptatem dolorum, in nemo iure corporis obcaecati quam modi voluptatum?",
  //   },
  //   {
  //     role: "user",
  //     message: "I want to know how to use Tailwind CSS",
  //   },
  //   {
  //     role: "assistant",
  //     message: "I can help you with that. Here are some examples.",
  //   },
  //   {
  //     role: "user",
  //     message: "How to use Tailwind CSS with React",
  //   },
  //   {
  //     role: "assistant",
  //     message:
  //       "Here is and example: https://tailwindcss.com/docs/guides/create-react-app",
  //   },
  //   {
  //     role: "user",
  //     message: "What is Lorem Ipsume?",
  //   },
  //   {
  //     role: "assistant",
  //     message:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem a quae id ipsum, reiciendis modi recusandae facilis iusto commodi quo deleniti assumenda placeat et ducimus iste maiores labore eligendi harum mollitia vero tenetur perspiciatis fugit non facere. Magnam totam voluptatibus aspernatur? Rem, accusantium similique unde eveniet officia cum alias iure? Distinctio vitae minima dicta explicabo voluptatibus sapiente eaque doloribus ipsa mollitia! Quo, fuga! Aspernatur doloremque odit, ratione accusamus doloribus molestias ex incidunt odio autem est sit, et aut laborum, sapiente nemo. Accusantium laboriosam voluptatum debitis? Recusandae consequatur labore repudiandae doloribus voluptatem dolorum, in nemo iure corporis obcaecati quam modi voluptatum?",
  //   },
  // ];

  return (
    <div className="App">
      <div className="sidebar">
        <div className="upper-side">
          <div className="upper-side-top">
            <img src={logo} alt="" className="logo" />
            <span className="brand">Lorem Ipsum</span>
            <span className="version">Beta</span>
          </div>
          <p className="tagline">Powered by Lorem Ipsum</p>
          <button className="mid-btn" onClick={startNewChat} >
            <img src={PlusIcon} alt="" className="add-btn" />
            New Chat
          </button>
          <div className="recent-chats">
            <h2>Recent Chats</h2>
            <button className="query">
              {/* <img src={MsgIcon} alt="" className="msg-icon" /> */}
              {/* What is Programming? */}

              {recentChats.map((chat, index) => (
                <p
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: ".5rem",
                  }}
                >
                  {chat.icon} {chat.text}
                </p>
              ))}
            </button>
            {/* <button className="query">
              <img src={MsgIcon} alt="" className="msg-icon" />
              What is API?
            </button> */}
          </div>
        </div>
        <div className="lower-side">
          <h2>Let's make today a great day for you!</h2>
          <img src={LowerSidebarVector} alt="" />
        </div>
      </div>
      <div className="main">
        {/* {chat.length > 0 ? (
          <div>
            {chat.map((item, index) => (
              <div
                style={
                  item.role === "assistant" ? { background: "#e7eeff" } : {}
                }
              >
                <span>
                  {item.role === "user" ? (
                    <img src={UserOutlined} alt="User" />
                  ) : (
                    <img src={logo} alt="bot" />
                  )}
                </span>
                <div>{item.message}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="chat-interface">
            <div className="main-top">
              <div className="main-top-upper">
                <img src={logo} alt="" className="main-logo" />
                <h2>
                  Welcome to <span>Lorem Ipsum</span> 👋
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae tempore nihil reiciendis dignissimos cupiditate
                  explicabo ipsam iste, blanditiis magni? Distinctio!
                </p>
              </div>
              <div className="main-btns">
                <button className="first-btn">
                  <img src={logo} alt="" />
                  Internal Knowledge
                </button>
                <button>
                  <img src={AskMe} alt="" />
                  Internal Knowledge
                </button>
              </div>
            </div>
            <div className="main-mid">
              <img src={LowerSidebarVector} alt="" />
              <p>
                Ask me a question or ask me to summarize a document for you!
                While like humans, I'm not perfect and have my limitations, your
                feedback is the key to my improvement.
              </p>
              <img src={Cross} alt="" />
            </div>
            <div className="btn-section">
              <div className="individual-btn-section">
                <div className="content">
                  <h3>Objectives and Key Results</h3>
                  <p>Let us show you the your OKRs.</p>
                </div>
                <div className="enter-btn">
                  <img src={EnterIcon} alt="" />
                </div>
              </div>

              <div className="individual-btn-section">
                <div className="content">
                  <h3>Objectives and Key Results</h3>
                  <p>Let us show you the your OKRs.</p>
                </div>
                <div className="enter-btn">
                  <img src={EnterIcon} alt="" />
                </div>
              </div>

              <div className="individual-btn-section">
                <div className="content">
                  <h3>Objectives and Key Results</h3>
                  <p>Let us show you the your OKRs.</p>
                </div>
                <div className="enter-btn">
                  <img src={EnterIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="chats">
              <div className="chat">
                <img className="chat-img" src={UserOutlined} alt="" />
                <p className="txt">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  quis ea doloremque vitae exercitationem placeat beatae
                  explicabo laboriosam id rem!
                </p>
              </div>
              <div className="chat bot">
                <img className="chat-img" src={logo} alt="" />
                <p className="txt">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laboriosam atque ut consequatur quidem enim, similique quo iste
              quas quam minus minima! Cumque soluta vel suscipit at repellat
              incidunt temporibus optio numquam alias quae distinctio minima
              provident dolores voluptate ratione explicabo, assumenda culpa
              expedita. Est iure laboriosam deserunt tempore. Non molestias
              quibusdam error, eius dignissimos ipsum cupiditate veniam eligendi
              a amet doloribus quidem, quod id eaque. Eius odio officia id, eum
              doloremque tempore, commodi sapiente dicta perspiciatis asperiores
              suscipit iure nemo facere molestias natus quo dolore hic, dolorem
              delectus molestiae accusantium alias fuga velit quis. Aliquid
              voluptatem id velit quidem. */}
        {/* {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                      {message.text}
                    </div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        )} */}
        <div className="chat-interface">
          <MainBar />
          <Suggestion />
          <Objectives />
      
        
       
          {/* <div className="chats"> */}
            {/* <div className="chat">
              <img className="chat-img" src={UserOutlined} alt="" />
              <p className="txt">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                quis ea doloremque vitae exercitationem placeat beatae explicabo
                laboriosam id rem!
              </p>
            </div> */}
            {/* <div className="chat bot"> */}
              {/* <img className="chat-img" src={logo} alt="" /> */}
              {/* <p className="txt"> */}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              laboriosam atque ut consequatur quidem enim, similique quo iste
              quas quam minus minima! Cumque soluta vel suscipit at repellat
              incidunt temporibus optio numquam alias quae distinctio minima
              provident dolores voluptate ratione explicabo, assumenda culpa
              expedita. Est iure laboriosam deserunt tempore. Non molestias
              quibusdam error, eius dignissimos ipsum cupiditate veniam eligendi
              a amet doloribus quidem, quod id eaque. Eius odio officia id, eum
              doloremque tempore, commodi sapiente dicta perspiciatis asperiores
              suscipit iure nemo facere molestias natus quo dolore hic, dolorem
              delectus molestiae accusantium alias fuga velit quis. Aliquid
              voluptatem id velit quidem. */}
                {/* {messages.map((message, index) => (
                  <div key={index} className={`message ${message.sender}`}>
                    {message.text}
                  </div>
                ))}
              </p> */}
            {/* </div> */}
          {/* </div> */}
        </div>
        <InputBar/>
      
      </div>
    </div>
  );
}

export default App;
