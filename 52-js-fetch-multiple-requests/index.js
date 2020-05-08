const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================
/**
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 *
 */

const renderMembers = (requiredInfo) => {
  const { name, born, died, gender, culture } = requiredInfo;
  const li = document.createElement("li");
  li.innerHTML = `
      <p class="name">${name}</p>
      <p class="life">${born} – ${died}</p>
      <p class="gender"><strong>Gender: </strong>${gender}</p>
      <p class="culture"><strong>Culture: </strong>${culture}</p>`;
  resultEl.append(li);
  return li;
};

//
const displayFilteredMembers = async (promises) => {
  resultEl.innerHTML = "";
  await promises.forEach((promise) => {
    renderMembers(promise);
  });
};

// need to filter user input alphabet,in real time
const filterMembers = async (mappedMembers) => {
  const promises = await Promise.all(mappedMembers).then(
    (memberData) => memberData
  );

  // if no input value rendering everything
  if (searchEl.value == "") {
    displayFilteredMembers(promises);
  }
  // when user input alphabet it'll filter and show the filtered ones
  searchEl.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = promises.filter((promise) => {
      const name = promise.name.toLowerCase();
      if (name.match(value)) {
        return true;
      }
    });
    displayFilteredMembers(filtered);
  });
};

const houseMembers = async (urls) => {
  // loop through swornMembers each url and
  // create new array with required keys.
  const mappedMembers = urls.map(async (url) => {
    return await fetch(url)
      .then((res) => res.json())
      .then((res) => ({
        name: res.name,
        born: res.born,
        died: res.died,
        gender: res.gender,
        culture: res.culture,
      }));
  });
  // passing promises to
  // displayMembers(mappedMembers);
  filterMembers(mappedMembers);
};

const houseData = async (url) => {
  // getting swornMembers each urls
  const getData = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.swornMembers);
  // passing swornMembersUrls to houseMembers function
  houseMembers(getData);
};

houseData(houseURL);
/**
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */
