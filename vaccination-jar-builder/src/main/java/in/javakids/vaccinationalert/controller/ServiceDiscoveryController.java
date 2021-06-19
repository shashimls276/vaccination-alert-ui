package in.javakids.vaccinationalert.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import in.javakids.vaccinationalert.model.RequestParamsVo;

@SpringBootApplication
@RestController
public class ServiceDiscoveryController {

	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping(value = "/responseList", method = RequestMethod.POST)
	public List<Object> getResponseAsObjectList(@RequestBody RequestParamsVo paramsVo) {

		ResponseEntity<Object[]> responseObject = null;
		List<Object> list = new ArrayList<Object>();
		if (paramsVo.getObject() != null)

		{
			responseObject = restTemplate.postForEntity("http://vaccination/" + paramsVo.getPath(),
					paramsVo.getObject(), Object[].class);
		} else {
			responseObject = restTemplate.getForEntity("http://vaccination/" + paramsVo.getPath(), Object[].class);
		}

		if (responseObject != null && null != responseObject.getBody()) {
			Object[] states = responseObject.getBody();
			list.addAll(Arrays.asList(states));
		}

		return list;
	}

	@RequestMapping(value = "/responseObject", method = RequestMethod.POST)
	public Object getResponseAsObject(@RequestBody RequestParamsVo paramsVo) {
		System.out.println("paramsVo :: " + paramsVo.getObject());
		Object responseObject = null;
		if (paramsVo.getObject() != null) {
			responseObject = restTemplate.postForEntity("http://vaccination/" + paramsVo.getPath(),
					paramsVo.getObject(), Object.class);
		} else {
			responseObject = restTemplate.getForEntity("http://vaccination/" + paramsVo.getPath(), Object.class);
		}

		return responseObject;
	}

}
