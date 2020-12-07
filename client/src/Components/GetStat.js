const getStat= async () => {
  const resp = await fetch("/auth/checkStat");
  const data = await resp.json();
  return data;
};


export default getStat;
