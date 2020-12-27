import "./App.css";
import FileUpload from "./Components/FileUpload/FileUpload";

function App() {
  const handleDrop = (files) => {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(files[0]);
  };

  const onReaderLoad = (event) => {
    const arr = JSON.parse(event.target.result);

    const key = "oB8ZKJN34cD_iDu89ilrcTar4f1MhxJ3tsNXcKfXWLI";

    // Generate a new API KEY. This KEY is expired.
    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${key}`;

    arr.forEach((item) => {
      fetch(
        `${url}&mode=retrieveAddresses&prox=${item.Latitude},${item.Longitude}`
      )
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="App">
      <FileUpload handleDrop={handleDrop}>
        <div style={{ height: "100%", width: 200 }}>
          <label>Places</label>
        </div>
      </FileUpload>
    </div>
  );
}

export default App;
