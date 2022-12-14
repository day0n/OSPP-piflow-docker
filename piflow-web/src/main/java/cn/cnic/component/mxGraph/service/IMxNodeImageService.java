package cn.cnic.component.mxGraph.service;


import org.springframework.web.multipart.MultipartFile;

public interface IMxNodeImageService {

    public String uploadNodeImage(String username, MultipartFile file, String imageType) throws Exception;

    public String getMxNodeImageList(String username, String imageType);

}
