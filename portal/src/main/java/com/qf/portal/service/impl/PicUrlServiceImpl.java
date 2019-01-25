package com.qf.portal.service.impl;

import com.qf.common.jedis.JedisClient;
import com.qf.common.jedis.JedisClientCluster;
import com.qf.common.util.JsonUtils;
import com.qf.common.util.StrKit;
import com.qf.portal.dao.HotelMapper;
import com.qf.portal.dao.PicurlMapper;
import com.qf.portal.pojo.po.Hotel;
import com.qf.portal.pojo.po.Picurl;
import com.qf.portal.pojo.po.PicurlExample;
import com.qf.portal.service.PicUrlService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PicUrlServiceImpl implements PicUrlService {
    private Logger logger = LoggerFactory.getLogger(PicUrlServiceImpl.class);
    @Autowired
    PicurlMapper picurlMapper;
    @Autowired
    private JedisClient jedisClient;
    @Autowired
    private HotelMapper hotelMapper;

    //private JedisClientCluster jedisClientCluster;
    @Override
    public List<Picurl> listUrlById(String id) {
        String fuck = "PIC_LIST";
        try {
            //xian cong haun cun limain na ,you jiu zhijie fanhui
            //此处调用的方法为jedisClient.hget(String key,String field) ,这里的id其实是字段,并不是想象中的value(坑),f返回的才是value值
            //    String pic_list = jedisClientCluster.hget(fuck,id);
            String pic_list = jedisClient.hget(fuck, id);
            if (StrKit.notBlank(pic_list)) {
                List<Picurl> picurls = JsonUtils.jsonToList(pic_list, Picurl.class);
                System.out.println("=============>我从缓存中拿了数据");
                return picurls;
            }
        } catch (RuntimeException re) {

            logger.error(re.getMessage(), re);
        }

        //fou ze  jiu cong shu ju ku li mian na
//       PicurlExample example = new PicurlExample();
//       PicurlExample.Criteria criteria = example.createCriteria();
//       criteria.andIdEqualTo(id);
        List<Picurl> list = picurlMapper.selectALL();
        System.out.println("GG ,-_-| -_-| -__-| -_-| 我没有从缓存中拿到数据 ");
        try {
            // jedisClientCluster.hset(fuck,id,JsonUtils.objectToJson(list));
            jedisClient.hset(fuck, id, JsonUtils.objectToJson(list));
            System.out.println("添加了一份缓存");
        } catch (RuntimeException e) {
            logger.error(e.getMessage(), e);
        }
        return list;
    }




    @Override
    public List<Hotel> ListByHotelId(String cityid) {

        String fuck = cityid;
        try {
           // jedisClient.del(cityid);
            //我清除了缓存
            String pic_list = jedisClient.hget(fuck, cityid);
            if (StrKit.notBlank(pic_list)) {
                List<Hotel> hotels = JsonUtils.jsonToList(pic_list, Hotel.class);
                System.out.println("=============>我从缓存中拿了数据");
                return hotels;
            }
        } catch (RuntimeException re) {

            logger.error(re.getMessage(), re);
        }


        List<Hotel> list = hotelMapper.selectById(cityid);
        System.out.println("GG ,-_-| -_-| -__-| -_-| 我没有从缓存中拿到数据 ");
        try {

            jedisClient.hset(fuck, cityid, JsonUtils.objectToJson(list));
            System.out.println("wo添加了一份缓存");
        } catch (RuntimeException e) {
            logger.error(e.getMessage(), e);
        }
        return list;
    }
}
