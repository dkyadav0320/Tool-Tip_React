import { Tooltip } from "./Tooltip";

function App () {
  return (
  <div className="App">  
  <button>Notification</button>
  <Tooltip text = {"React is developed by Facebook (Meta) Organisation"}>
  <span class="material-symbols-outlined">
lightbulb
</span>
  </Tooltip>



  <button>Notification</button>
  <Tooltip text = {"Tool-Tip help to provide informtion when user hover over them"}>
  <span class="material-symbols-outlined">
lightbulb
</span>
  </Tooltip>


  <button>Notification</button>
  <Tooltip text = {"Frontend, Backend and React = Full Stack Web Development"}>
  <span class="material-symbols-outlined">
lightbulb
</span>
  </Tooltip>


  </div>
  );
}

export default App;