const dataArray = [
  { name: 'Marry' },
  { name: 'Harry' },
  { name: 'Sherlock' },
  { name: 'Tom' },
  { name: 'Jerry' },
  { name: 'Robert' },
];

// In this case updatedArray will be equal to array of Card components
const updatedArray = dataArray.map((data) => {
  return <Card name={data.name} />
})

/*
updatedArray = [
  <Card name={Marry} />,
  <Card name={Harry} />,
  <Card name={Sherlock} />,
  <Card name={Tom} />,
  <Card name={Jerry} />,
  <Card name={Robert} />
]
*/
