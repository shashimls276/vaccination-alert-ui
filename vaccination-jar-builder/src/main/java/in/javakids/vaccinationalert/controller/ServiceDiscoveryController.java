package in.javakids.vaccinationalert.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.javakids.vaccinationalert.model.ServiceDiscoveryVo;

@SpringBootApplication
@RestController
public class ServiceDiscoveryController {

	@Autowired
	@LoadBalanced
	private DiscoveryClient discoveryClient;

	@RequestMapping("/service-instances/{applicationName}")
	public ServiceDiscoveryVo serviceInstancesByApplicationName(@PathVariable String applicationName) {
		List<ServiceInstance> serviceInstances = this.discoveryClient.getInstances(applicationName);
		List<String> services = this.discoveryClient.getServices();
		System.out.println("Services :: "+services);
		ServiceDiscoveryVo serviceDiscoveryVo = new ServiceDiscoveryVo();
		
		System.out.println("List : "+serviceInstances);
		for(ServiceInstance s : serviceInstances) {
			System.out.println("Name :: "+s);
			System.out.println(s.getInstanceId());
			serviceDiscoveryVo.setUrl(s.getInstanceId());
			if(!s.getInstanceId().contains("http://")) {
				serviceDiscoveryVo.setUrl("http://"+s.getInstanceId());
			}
		}
		return serviceDiscoveryVo;
		
	}

}
