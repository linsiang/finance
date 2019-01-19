package com.qf.manager.serviceImpl;

import com.qf.common.dto.Message;
import com.qf.manager.dao.MessageMapper;
import com.qf.manager.service.CatgoryService;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.common.SolrInputDocument;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public class CatgoryServiceImpl implements CatgoryService {
    private Logger logger = LoggerFactory.getLogger(CatgoryServiceImpl.class);
    @Autowired
    private MessageMapper messageMapper;
    @Autowired
    private SolrServer solrServer;

    @Override
    public void importAllMessage() {
       List<Message> dtoList = messageMapper.listmesages();
        System.out.println(dtoList);
       try{
        for (Message dto : dtoList) {
                SolrInputDocument document = new SolrInputDocument();
                // 将每一个对象的每个属性对应到schema.xml中field
                document.addField("id", dto.getId());
                document.addField("mnane", dto.getMname());
                document.addField("location", dto.getLocation());
                document.addField("mdesc", dto.getMdesc());
                // 添加到文档域
               solrServer.add(document);
            }
               solrServer.commit();
       }catch (SolrServerException se) {
            logger.error(se.getMessage(), se);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }
}


//
//
//@Service
//public class BorrowServiceImpl implements BorrowService {
//    private Logger logger = LoggerFactory.getLogger(BorrowServiceImpl.class);
//
//    @Autowired
//    private BorrowLoanBorrowMapper borrowLoanBorrowMapper;
//    @Autowired
//    private SolrServer solrServer;
//
//    @Override
//    public void importAllBorrows() {
//
//        try {
//            // 采集数据
//            List<BorrowDTO> dtoList = borrowLoanBorrowMapper.listBorrows();
//            // 存入到索引库
//            for (BorrowDTO dto : dtoList) {
//                SolrInputDocument document = new SolrInputDocument();
//                // 将每一个对象的每个属性对应到schema.xml中field
//                document.addField("id", dto.getId());
//                document.addField("borrow_username", dto.getUsername());
//                document.addField("borrow_nickname", dto.getNickname());
//                document.addField("borrow_name", dto.getName());
//                // 添加到文档域
//                solrServer.add(document);
//            }
//            // 提交
//            solrServer.commit();
//        } catch (SolrServerException se) {
//            logger.error(se.getMessage(), se);
//        } catch (Exception e) {
//            logger.error(e.getMessage(), e);
//        }
//
//    }
//}