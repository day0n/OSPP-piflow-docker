package cn.cnic.controller.system;

import cn.cnic.base.utils.LoggerUtil;
import cn.cnic.base.utils.PasswordUtils;
import cn.cnic.base.utils.SessionUserUtil;
import cn.cnic.base.vo.UserVo;
import cn.cnic.component.system.service.ILogHelperService;
import cn.cnic.component.system.service.ISysUserService;
import cn.cnic.component.system.vo.SysUserVo;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;




@Controller
@RequestMapping("/")
public class LoginCtrl {

	/**
     * Introducing logs, note that they are all packaged under "org.slf4j"
     */
    private Logger logger = LoggerUtil.getLogger();

    private final ISysUserService sysUserServiceImpl;
    private final ILogHelperService logHelperServiceImpl;

    @Autowired
    public LoginCtrl(ISysUserService sysUserServiceImpl, ILogHelperService logHelperServiceImpl) {
        this.sysUserServiceImpl = sysUserServiceImpl;
        this.logHelperServiceImpl = logHelperServiceImpl;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ModelAndView login(ModelAndView modelAndView) {
        UserVo user = SessionUserUtil.getCurrentUser();
        if (null != user) {
            logger.info("Already logged in, jump homepage");
            modelAndView.setViewName("jump");
        } else {
            modelAndView.setViewName("login");
        }
        modelAndView.addObject("now", "say hello spring boot !!!!!");
        return modelAndView;
    }

    @RequestMapping(value = "/jwtLogin", method = RequestMethod.POST)
    @ResponseBody
    public String login(String username,String password){
        PasswordUtils.getKeyAndValue(username,password);
        return sysUserServiceImpl.jwtLogin(username, password);
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public String register(String username, String pw, String name, String sex, String status) {
        if (StringUtils.isBlank(status)) {
        	status = "0";
        }
    	// String ipAddr = IpUtil.getIpAddr(request);
        SysUserVo sysUserVo = new SysUserVo();
        sysUserVo.setUsername(username);
        sysUserVo.setPassword(pw);
        sysUserVo.setSex(sex);
        sysUserVo.setName(name);
        sysUserVo.setStatus(Byte.valueOf(status));
        // sysUserVo.setLastLoginIp(ipAddr);
        logHelperServiceImpl.logAuthSucceed("create user ",username);
        PasswordUtils.getKeyAndValue(username,pw);
        return sysUserServiceImpl.registerUser(sysUserVo);
    }

    @RequestMapping(value = "/checkUserName", method = RequestMethod.POST)
    @ResponseBody
    public String checkUserName(String username) {
        return sysUserServiceImpl.checkUserName(username);
    }
}
