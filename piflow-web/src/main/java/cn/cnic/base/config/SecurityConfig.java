package cn.cnic.base.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import cn.cnic.base.config.jwt.CustomUserDetailsService;
import cn.cnic.base.config.jwt.JwtAuthenticationEntryPoint;
import cn.cnic.base.config.jwt.JwtAuthenticationTokenFilter;
import cn.cnic.common.constant.SysParamsCache;

@Configurable
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)//Pre-Method Check for Allowing Page Entry
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    private final JwtAuthenticationEntryPoint unauthorizedHandler;
    private final AccessDeniedHandler accessDeniedHandler;
    private final CustomUserDetailsService customUserDetailsService;
    private final JwtAuthenticationTokenFilter authenticationTokenFilter;

    @Autowired
    public SecurityConfig(JwtAuthenticationEntryPoint unauthorizedHandler,
                          AccessDeniedHandler accessDeniedHandler,
                          CustomUserDetailsService customUserDetailsService,
                          JwtAuthenticationTokenFilter authenticationTokenFilter) {
        this.unauthorizedHandler = unauthorizedHandler;
        this.accessDeniedHandler = accessDeniedHandler;
        this.customUserDetailsService = customUserDetailsService;
        this.authenticationTokenFilter = authenticationTokenFilter;
    }

    @Override
    public void configure(WebSecurity web) {
        //Solving the problem of static resources being intercepted
        web.ignoring().antMatchers("/components/**", "/js/**", "/css/**", "/my_js/*", "/my_js/**", "/my_css/*", "/my_css/**", "/img/**", "/img/*", "/images/**", "/images/*"
                , "/doc.html", "/webjars/**", "/swagger-resources/**", "/v2/api-docs/**");
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(new BCryptPasswordEncoder());//Add a custom userDetailsService certificate
        auth.eraseCredentials(false);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.exceptionHandling().accessDeniedHandler(accessDeniedHandler).and()
                // ??????????????????JWT????????????????????????csrf
                .csrf().disable()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                // ??????token??????????????????session
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()

                .authorizeRequests()

                // ????????????token???rest api?????????????????????
                .antMatchers("/api/v1/auth", "/api/v1/signout", "/error/**", "/api/**").permitAll()
                .antMatchers("/register", "/checkUserName", "/jwtLogin", "/error", "/login").permitAll()
                .antMatchers("/").permitAll()
                .antMatchers().permitAll()
                // ???????????????????????????????????????????????????
                .anyRequest().authenticated();
        // ????????????
        http.headers().cacheControl();

        // ??????JWT filter
        http.addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);


        if (SysParamsCache.IS_IFRAME) {
            http.headers().frameOptions().disable();
        }
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}
