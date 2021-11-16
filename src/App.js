import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './App.scss';

function App() {
  return (
    <section id="container">
      <aside id="chat-sidebar">
        <div className="user-search">
          <form id="user-search-form">
          <FontAwesomeIcon id="search-icon" icon={faSearch} />
            <input
              type="search"
              name="user-search"
              id="user-search-box"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="user-list">
          <p>3 users online</p>

          <p>
            <img
              className="chat-message-img"
              src="https://i.imgur.com/nlhLi3I.png"
              alt="bobby"
            />{' '}
            Bobby (you)
          </p>

          <p>
            <img
              className="chat-message-img"
              src="https://i.imgur.com/z5LNkkB.png"
              alt="bobba"
            />{' '}
            Bobba
          </p>

          <p>
            <img
              className="chat-message-img"
              src="https://i.imgur.com/73hZDYK.png"
              alt="bob"
            />{' '}
            Bob
          </p>
        </div>
      </aside>

      <div id="chat-container">
        <header id="chat-header">
          <div id="chat-logo">chatty</div>

          <div id="chat-avatar">
            <div>
              <img
                id="chat-avatar-img"
                src="https://i.imgur.com/nlhLi3I.png"
                alt="bobby"
              />
            </div>
            <div id="chat-username">Bobby</div>
            <div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </header>
        <div className="chat-main-container">
          <main id="chat-messages">
            <article className="chat-message">
              <header className="chat-message-header">
                <div className="chat-message-user">
                  <div className="chat-message-avatar">
                    <img
                      className="chat-message-img"
                      src="https://i.imgur.com/nlhLi3I.png"
                      alt="bobby "
                    />
                  </div>
                  <div className="chat-message-username">Bobby</div>
                </div>
                <div className="chat-message-time">15 minutes ago</div>
              </header>

              <div className="chat-message-body">
                <textarea className="chat-message-content" readonly>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque quisquam quia debitis nam dolorem quidem vel veritatis
                  nihil a magni, pariatur harum facilis! Quisquam atque
                  praesentium voluptatum accusamus voluptate aut?
                </textarea>
              </div>
            </article>

            <article className="chat-message">
              <header className="chat-message-header">
                <div className="chat-message-user">
                  <div className="chat-message-avatar">
                    <img
                      className="chat-message-img"
                      src="https://i.imgur.com/z5LNkkB.png"
                      alt="bobba"
                    />
                  </div>
                  <div className="chat-message-username">Bobba</div>
                </div>
                <div className="chat-message-time">12 minutes ago</div>
              </header>

              <div className="chat-message-body">
                <textarea className="chat-message-content" readonly>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque quisquam quia debitis nam dolorem quidem vel veritatis
                  nihil a magni, pariatur harum facilis! Quisquam atque
                  praesentium voluptatum accusamus voluptate aut?
                </textarea>
              </div>
            </article>

            <article className="chat-message">
              <header className="chat-message-header">
                <div className="chat-message-user">
                  <div className="chat-message-avatar">
                    <img
                      className="chat-message-img"
                      src="https://i.imgur.com/73hZDYK.png"
                      alt="bob"
                    />
                  </div>
                  <div className="chat-message-username">Bob</div>
                </div>
                <div className="chat-message-time">10 minutes ago</div>
              </header>

              <div className="chat-message-body">
                <textarea className="chat-message-content" readonly>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque quisquam quia debitis nam dolorem quidem vel veritatis
                  nihil a magni, pariatur harum facilis! Quisquam atque
                  praesentium voluptatum accusamus voluptate aut?
                </textarea>
              </div>
            </article>
          </main>
          <footer id="chat-box">
            <form>
              <div className="chat-box-input-container">
                <input type="text" name="chat-box-input" id="chat-box-input" />
              </div>
              <div className="chat-box-send">
                <button>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default App;
