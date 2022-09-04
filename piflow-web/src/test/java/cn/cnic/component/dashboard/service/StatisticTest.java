package cn.cnic.component.dashboard.service;

import java.util.Map;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import cn.cnic.ApplicationTests;
import cn.cnic.base.utils.ReturnMapUtils;

public class StatisticTest extends ApplicationTests {

    private final IStatisticService statisticServiceImpl;

    @Autowired
    public StatisticTest(IStatisticService statisticServiceImpl) {
        this.statisticServiceImpl = statisticServiceImpl;
    }

    @Test
    @Rollback(false)
    public void testGetFlowStatisticInfo() {
        Map<String,String> result = statisticServiceImpl.getFlowStatisticInfo();
        //JsonUtils.toJsonNoException(setSucceededCustomParam(key, value));
        String str = ReturnMapUtils.setSucceededCustomParamRtnJsonStr("flowResourceInfo", result);
        System.out.println(str);

    }

    @Test
    @Rollback(false)
    public void testGetGroupStatisticInfo() {
        Map<String,String> result = statisticServiceImpl.getGroupStatisticInfo();
        //JsonUtils.toJsonNoException(setSucceededCustomParam(key, value));
        String str = ReturnMapUtils.setSucceededCustomParamRtnJsonStr("groupResourceInfo", result);
        System.out.println(str);
    }

    @Test
    @Rollback(false)
    public void testGetScheduleStatisticInfo() {
        Map<String,String> result = statisticServiceImpl.getScheduleStatisticInfo();
        //JsonUtils.toJsonNoException(setSucceededCustomParam(key, value));
        String str = ReturnMapUtils.setSucceededCustomParamRtnJsonStr("scheduleResourceInfo", result);
        System.out.println(str);
    }

    @Test
    @Rollback(false)
    public void testGetTemplateAndDataSourceStatisticInfo() {
        Map<String,String> result = statisticServiceImpl.getTemplateAndDataSourceStatisticInfo();
        //JsonUtils.toJsonNoException(setSucceededCustomParam(key, value));
        String str = ReturnMapUtils.setSucceededCustomParamRtnJsonStr("tempalateAndDataSourceResourceInfo", result);
        System.out.println(str);

    }

    @Test
    @Rollback(false)
    public void testGetStopStatisticInfo() {
        Map<String,String> result = statisticServiceImpl.getStopStatisticInfo();
        //JsonUtils.toJsonNoException(setSucceededCustomParam(key, value));
        String str = ReturnMapUtils.setSucceededCustomParamRtnJsonStr("stopResourceInfo", result);
        System.out.println(str);

    }
}
