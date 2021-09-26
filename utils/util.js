const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = 0;
  const minute = 0;
  const second = 0;
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

const formatDateTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

function getTimeShortStrFromTime(tempTimeStr) //只接受Date Str对象
{
  var tempnow = new Date();
  var tempTime = new Date(tempTimeStr);
  var tempnowDate = tempnow.getFullYear() + "/" + (tempnow.getMonth() + 1) + "/" + tempnow.getDate();
  var tempTimeDate = tempTime.getFullYear() + "/" + (tempTime.getMonth() + 1) + "/" + tempTime.getDate();
  var ResStr = "";

  if (tempnowDate == tempTimeDate) {
    ResStr = fillZero(tempTime.getHours()) + ":" + fillZero(tempTime.getMinutes());
  } else {
    ResStr = fillZero(tempTime.getMonth() + 1) + "/" + fillZero(tempTime.getDate() + "");
  }

  return ResStr;

  function fillZero(tempInt) //补全前导0
  {
    if (tempInt < 10) {
      return "0" + tempInt.toString();
    } else {
      return tempInt.toString();
    }
  }
}

module.exports = {
  formatTime,
  formatDateTime,
  getTimeShortStrFromTime
};