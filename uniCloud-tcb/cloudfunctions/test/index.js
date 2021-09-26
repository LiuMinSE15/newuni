'use strict';
exports.main = async (event, context) => {
   const db = uniCloud.database();
	const collection = db.collection('PMPCustomerOrderItem')
	const res = await collection.get()
	console.log(JSON.stringify(res.data))
	console.log("从数据库得到的值为："+res.data);
	return {
		code: 200,
		msg: "查询成功",
		data: res.data
	}
};
