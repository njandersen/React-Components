import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell />
          Hello There
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />I hate Sand
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Clicky Click
        </Button>
      </div>
      <div>
        <Button warning>Buy Now!</Button>
      </div>
      <div>
        <Button danger>DANGER</Button>
      </div>
      <div>
        <Button primary outline>
          Star Wars
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
