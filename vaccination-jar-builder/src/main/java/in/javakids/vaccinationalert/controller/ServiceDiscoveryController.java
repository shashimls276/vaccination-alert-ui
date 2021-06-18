package in.javakids.vaccinationalert.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import in.javakids.vaccinationalert.model.ServiceDiscoveryVo;
import in.javakids.vaccinationalert.model.State;
import in.javakids.vaccinationalert.model.StateListInfo;

@SpringBootApplication
@RestController
public class ServiceDiscoveryController {

	@Autowired
	private DiscoveryClient discoveryClient;

	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping("/service-instances/{applicationName}")
	public ServiceDiscoveryVo serviceInstancesByApplicationName(@PathVariable String applicationName) {
		List<ServiceInstance> serviceInstances = this.discoveryClient.getInstances(applicationName);
		List<String> services = this.discoveryClient.getServices();
		System.out.println("Services :: " + services);
		ServiceDiscoveryVo serviceDiscoveryVo = new ServiceDiscoveryVo();

		System.out.println("List : " + serviceInstances);
		for (ServiceInstance s : serviceInstances) {
			System.out.println("Name :: " + s);
			System.out.println(s.getInstanceId());
			serviceDiscoveryVo.setUrl(s.getInstanceId());
			if (!s.getInstanceId().contains("http://")) {
				serviceDiscoveryVo.setUrl("http://" + s.getInstanceId());
			}
		}
		return serviceDiscoveryVo;

	}

	@RequestMapping(value = "/states")
	public List<State> getStateList() {

		System.out.println("Inside getStateList ......................");

		ResponseEntity<StateListInfo> stateListInfo = restTemplate
				.getForEntity("http://vaccination/vaccinationInfo/states/", StateListInfo.class);

		StateListInfo statesListInfo = stateListInfo.getBody();

		return statesListInfo.getStates();
	}

}
