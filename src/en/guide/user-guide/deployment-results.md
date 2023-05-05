---
footerLink: /guide/user-guide/deployment-results
title: View Deployment Results
---
# View Deployment Results

Before starting this section, please ensure that you have read the [Main Process](main-process.md) section to understand the main process and related terminology for deploying applications in Nautes, and you have created at least one [deployment runtime](deployment-runtime.md).

You can view the deployment information of your applications using both the ArgoCD console and the kubectl command line. You can only view and manage resources related to authorized products.

## View Resources in ArgoCD

Access the ArgoCD console installed on the runtime cluster by using a browser to access `https://$argocdHost:$traefik-httpsNodePort`. Click `LOG IN VIA DEX` for unified authentication. If you haven't logged into GitLab in the current browser session, you'll need to enter your GitLab account and password to log in. After logging in successfully, the page will automatically redirect to the ArgoCD console.

> Replace the $argocdHost variable with the argocdHost address of the cluster hosting the runtime environment. For more information, refer to `spec.argocdHost` in the property template in the [Register Physical Cluster](deploy-an-application.md#register-physical-cluster) or [Register Virtual Cluster](deploy-an-application.md#register-virtual-cluster) section, for example, `argocd.vcluster-aliyun-0412.8.217.50.114.nip.io`.
>
> Replace the $traefik-httpsNodePort variable with the traefik port of the cluster hosting the runtime environment. For more information, refer to `spec.traefik.httpsNodePort` in the property template in the [Register Physical Cluster](deploy-an-application.md#register-physical-cluster) or [Register Virtual Cluster](deploy-an-application.md#register-virtual-cluster) section, for example, `30443`.

The ArgoCD console lists ArgoCD applications that are related to products authorized for you, and you will be able to view and manage related resources. By clicking on an ArgoCD application card, you can see the resource manifest, YAML, events, logs, and perform actions such as synchronization, restart, and deletion. By clicking on "Settings" in the left menu bar of the ArgoCD console, you can also view ArgoCD projects associated with authorized products.

![directive syntax graph](./../images/quickstart-argocd-2.png)

## View Resources in Kubernetes

You can obtain an ID Token for authentication by using a standard OIDC client, and use it as an authentication credential for kubectl to access Kubernetes as an authenticated user on the server.
The section describes how to perform unified authentication and obtain an ID Token using an example client provided by DEX.

You can obtain [the source code of the client](https://github.com/dexidp/dex/tree/master/examples/example-app), and compile the source code into a binary file. You can start the client using the following command, and the client will provide a WEB UI for unified authentication and return the authentication result.

```shell
./example-app \
 --client-id "$client_id" \
 --client-secret "$client_secret" \
 --issuer "$dex_url" \
 --issuer-root-ca "$dex_ca" \
 --listen "http://0.0.0.0:5555" \Kubeconfig
 --redirect-uri "http://$ip:5555/callback" > /tmp/dex-client.log 2>&1 &
```

The variables `$client_id` and `$client_secret` are the client secrets issued by DEX, `$dex_url` is the service address of DEX, `$dex_ca` is the HTTPS certificate of DEX, and `$ip` is the IP address of the server where the client is running.

After the service is started, you can access the client on port `5555`, fill in the `Extra scopes` with `groups`, and click `Login` for unified authentication.

![directive syntax graph](./../images/quickstart-dex-1.png)

If authentication is successful, an ID Token will be generated, and the example is as shown below:

```Shell
eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2OGUyODFmN2FkYTk2NjNmMWI0MTc0NGFhYTUzZDRmYjk0N2Q1YjMifQ.eyJpc3MiOiJodHRwczovL2RleC5ibHV6aW4uaW86OTA4MCIsInN1YiI6IkNnSXhNaElHWjJsMGJHRmkiLCJhdWQiOiJwbGF0Zm9ybSIsImV4cCI6MTY4MDg3Mjc2MiwiaWF0IjoxNjgwNzg2MzYyLCJhdF9oYXNoIjoiWTNNbnRHLTE3SERaWjNVb0hiNWdmUSIsImNfaGFzaCI6IlBGUXNEM1hPSkhNZ1B3RW1LNXl5bEEiLCJlbWFpbCI6ImxpdWp1bmhvbmdAdmlzcHJhY3RpY2UuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImdyb3VwcyI6WyJ5dW50aSIsIm5hdXRlcy1sYWJzIiwidGVrdG9uY2QiLCJkZXYtdGVuYW50IiwieXVudGkvc3ViZ3JvdXAiLCJ5dW50aS9zdWJncm91cC9zdWJzdWJncm91cCJdLCJuYW1lIjoibGl1anVuaG9uZyIsInByZWZlcnJlZF91c2VybmFtZSI6ImxpdWp1bmhvbmcifQ.AYiLwJMcVaJdVdF-j_RZnHCPpg1psF3CJlzlBzvBYcuI_t7slgRaumRmGJEYXHYn2QFxjEZCNnBiOpJDDJoitVTxi1qoZ2nNoxhB3Wtxc1MoqkiPR5wy49yHw5roTnqIuEBy5BMpN_embxB9vK1bwxf414PsYKm1Dhbj8dynpURjpTsLrN5k7zVC7RQxVvglNX4cgYEucvSLqMEdtHNlmtnRsl6DJuItxC0MYwXlp4C9FNWswUjSpargdX4wgqfYy91l66GiI2Xj_zdba0NHLcPean-nmBMObLNhxex4hj8IVcGyiEu9in87y8eisrCBoLEWP9SJ_ZxWiOPoTFr54A
```

You can use the ID Token to replace the authentication information in kubeconfig:

```yaml
# Replace the configuration of users in the kubeconfig file with the ID Token.
apiVersion: v1
clusters:
......
kind: Config
preferences: {}
users:
- name: user
  user:
    token: $ID-Token
```

If your runtime cluster type is virtual, you can obtain the kubeconfig file using the command line:

```Shell
# Replace the $VCLUSTER variable with the name of the virtual cluster.
kubectl get secret vc-$VCLUSTER-vcluster -n $VCLUSTER --template={{.data.config}} | base64 -d
```

After applying the kubeconfig file, you can use the kubectl command line to view the resources in the namespace with the same name as the deployment runtime, and you have management permissions for all resources in the namespace.

```Shell
# Apply the kubeconfig.
export KUBECONFIG=/opt/vcluster/kubeconfig-dex.yaml
# Use the kubectl command line to manage resources in the namespace. The following command lines are only examples.
kubectl get deployment -n deployment-runtime-1
kubectl delete deployment deployment-test -n deployment-runtime-1
```
