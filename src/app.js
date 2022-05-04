import "./styles/app.css";

import AppWrapper from "./appWrapper";
import Header from "./header.js";
import LeftMenu from "./left-menu.js";
import MainWrapper from "./mainWrapper";
import Toolbar from "./toolbar.js";
import ContentWrapper from "./contentWrapper.js";
import Title from "./title.js";
import ContentHeader from "./contentHeader.js";
import EmailBody from "./emailBody.js";
import EmailActions from "./emailActions.js";

function App() {
  return (
    <AppWrapper>
      <Header />
      <LeftMenu />
      <MainWrapper>
        <Toolbar />
        <ContentWrapper>
          <Title />
          <ContentHeader />
          <EmailBody />
          <EmailActions />
        </ContentWrapper>
      </MainWrapper>
    </AppWrapper>
  );
}

export default App;
