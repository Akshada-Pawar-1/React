// const heading = document.createElement("h1");
// heading.innerHTML= "App using JS";
// const root = document.getElementById('root');
// root.appendChild(heading);

// const heading = React.createElement(
//   "h1",
//   { className: "header" },
//   "App using React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="parent">
    <div id="child1">
        <h1>Nested element in react</h1>
        <h1>Nested element in react</h1>
    </div>
    <div id="child2">
        <h1>Nested element in react</h1>
        <h1>Nested element in react</h1>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", class: "child1" }, [
    React.createElement("h1", {}, "Sibling A"),
    React.createElement("h1", {}, "Sibling B"),
  ]),
  React.createElement("div", { id: "child2", class: "child2" }, [
    React.createElement("h1", {}, "Sibling A"),
    React.createElement("h1", {}, "Sibling B"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
