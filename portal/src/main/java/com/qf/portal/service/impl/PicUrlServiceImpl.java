package com.qf.portal.service.impl;

import com.qf.common.jedis.JedisClient;
import com.qf.common.util.JsonUtils;
import com.qf.common.util.StrKit;
import com.qf.portal.dao.PicurlMapper;
import com.qf.portal.pojo.po.Picurl;
import com.qf.portal.pojo.po.PicurlExample;
import com.qf.portal.service.PicUrlService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class PicUrlServiceImpl  implements PicUrlService {
    private Logger logger = LoggerFactory.getLogger(PicUrlServiceImpl.class);
   @Autowired
    PicurlMapper picurlMapper;
   @Autowired
   private JedisClient jedisClient;

    @Override
    public List<Picurl> listUrlById(String id) {
       try{
           //xian cong haun cun limain na ,you jiu zhijie fanhui
        String pic_list = jedisClient.hget("PIC_LIST",id);
        if(StrKit.notBlank(pic_list)){
            List<Picurl> picurls = JsonUtils.jsonToList(pic_list,Picurl.class);
            System.out.println("=============>我从缓存中拿了数据");
            return picurls;
        }
       } catch (RuntimeException re){

        logger.error(re.getMessage(),re);
       }

       //fou ze  jiu cong shu ju ku li mian na
//       PicurlExample example = new PicurlExample();
//       PicurlExample.Criteria criteria = example.createCriteria();
//       criteria.andIdEqualTo(id);
         List<Picurl>  list = picurlMapper.selectALL();
         System.out.println("GG ,-_-| -_-| -__-| -_-| 我没有从缓存中拿到数据 ");
try{
    jedisClient.hset("PIC_LIST",id,JsonUtils.objectToJson(list));
    System.out.println("添加了一份缓存");
}catch (RuntimeException e){
    logger.error(e.getMessage(),e);
}
   return list;
    }
}
