const company = {
  name: "자연",
  location: {
    conutry: "대한민국",
    city: "계룡",
    address: {
      street: "대덕로",
      building: {
        name: "클호트타워",
        floor: 3,
      },
    },
  },
};
console.log(company.location.address.building.floor);

const {
  location: {
    address: {
      building: { floor },
    },
  },
} = company;
console.log(floor);

const {
  name: companyNmae, // 이름도 변경사능 함
  location: {
    city,
    address: {
      street,
      building: { name: buildingNmae },
    },
  },
} = company;

console.log(companyNmae);
