const dropdown = (parent, data) => {
  data.forEach((item) => {
    let link = document.createElement("option");

    link.innerText = item.name;
    link.className =
      " weather dropdown theme-controller btn btn-sm btn-block btn-ghost justify-start";
    link.value = `${item.latitude},${item.longitude}`;

    parent.appendChild(link);
  });
};

export { dropdown };
