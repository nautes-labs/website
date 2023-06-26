---
footerLink: /guide/user-guide/cluster
title: Register Runtime Cluster
---
# Register Runtime Cluster

Before starting this section, please ensure that you have read the [Main Process](main-process.md) section to understand the main process and related terminology for running pipelines and deploying applications in Nautes.

Runtime clusters are used to host the runtime environment for applications. The supported cluster types include physical clusters and virtual clusters.

Support both [Command Line](run-a-pipeline.md#register-runtime-cluster) and API for registering runtime clusters.

## Prerequisites

### Create Access Token

You need to create an access token as a request header for requesting APIs. For more information, refer to [Register a GitLab Account](run-a-pipeline.md#register-a-gitlab-account).

### Import Certificates

Before accessing the Nautes API Server via the HTTPS protocol, please [import certificates](run-a-pipeline.md#import-certificates) first.

## Register Physical Cluster（API）

### Compose Physical Cluster Registration Request

Compose an API request example by API definition `Cluster_SaveCluster` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server
    # Replace the variable $gitlab-access-token with the GitLab access token
    # Replace the variable $cluster-name with the cluster name
    curl -X 'POST' \
        'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' \
        -d '{
                # Cluster API SERVER URL. Replace the variable with the address of the physical cluster.
                "api_server": $api-server,
                # Cluster kind. Currently only supports Kubernetes.
                "cluster_kind": "kubernetes",
                # Cluster type: virtual or physical
                "cluster_type": $cluster-type,
                # Cluster usage: host or worker
                "usage": $usage,
                # Work type: pipeline or deployment
                "worker_type": $worker-type,
                # Primary domain: Replace $cluster-ip with the host cluster IP.
                "primary_domain": "$cluster-ip.nip.io",
                # Tekton domain：When the worker_type is set to 'pipeline', the property should be filled in. Replace $cluster-ip with the host cluster IP.
                "tekton_host": "tekton.$cluster-name.$cluster-ip.nip.io",
                # ArgoCD domain. Replace $cluster-ip with the cluster IP.
                "argocd_host": "argocd.$cluster-name.$cluster-ip.nip.io",
                # Traefik configuration
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the physical cluster, 
                # and ensure that the kubeconfig has been escaped for newline characters or has been encoded with Base64.
                "kubeconfig": $kubeconfig
            }'
```

The request example for the project pipeline runtime cluster after replacing variables is shown below:

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-pipeline' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:6443",
                "cluster_kind": "kubernetes",
                "cluster_type": "physical",
                "usage": "worker",
                "worker_type": "pipeline",
                "primary_domain": "8.217.50.114.nip.io",
                "tekton_host": "tekton.physical-worker-pipeline.8.217.50.114.nip.io",
                "argocd_host": "argocd.physical-worker-pipeline.8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkakNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFRdnRkRTdSVW1BSHYxOHdEWDF2L2pucWFFU3NmcjduUm5wbTViYjZ0NmEKRDZmZHg0NnVRYitDYWFjVXJUMVVycTVOSTJNTHhHSC8yS0xBL2Y0T2V4WjRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVW13L1FHSXc1N2VtQjhnaDhwQVpGCmdrVG1sQzB3Q2dZSUtvWkl6ajBFQXdJRFJ3QXdSQUlnU0FCZDdMdEVxYnY3Q0pqQ2VHa1ljL1ZqUkh3NnNTSkUKMHJFV3ZyVFFoSFlDSUJoZXpPOXRTVVpxV3dlVGk1SFZTUEhYNnRmR2E0SkpkTlNuN01ma0RMZnMKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    server: https://10.204.118.23:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJT0MvTUZodzFVSXd3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamcyTVRRd05EYzBNQjRYRFRJek1EWXdOekV5TWpFeE5Gb1hEVEkwTURZdwpOakV5TWpFeE5Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdmFlak9Yc09NVWtsd1oKU25nL1dXTy9zTE5XRG9rMzF3Z3A4ditVVWZ6b25SRGtGRzRJK3RYNXpwYUF6TXlsZndmWWc2aUZ1RmkzaWRkKwpQRlpod0d1alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUStpcXZQYVQxRW5qZVA0SlhqWkxSYWd1NnRzVEFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCMVFtQ2NyRHZGSUxVMUl3K01laURkZERMQkhoQVdhOUJ1T3NCRFZLU0F5Z0lnSEgyOVF5UDg1aEZQUkd6dQpQZENjdjdVN01NL2lpOG5zbGQrTy8ySW8yYnc9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFReXM3c3JZWEFFczBPa2lqWkt0R1hEZk1HWlhzMGJySGx4T1dwRGZ0d2cKK2xFMGRaNFJ4U1hYVWhCNEo0ZjB0ZUhXRk5NVmU3c1pjN2kyNTAwbWVoUUVvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVVBvcXJ6Mms5Uko0M2orQ1Y0MlMwCldvTHVyYkV3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUxjQlllRGFEMTc0YVpaUU1CQm53NHAvNmY5S1hVb2YKM2tpRFFXNUNLTWgzQWlCdWFPR252Yml2ajRDeHJPckgxWEZSUS9VR2tXYmtGWEUweExWc1VJZmprQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUZ6TDY2TDZMWGkvM3IzUEdFYTRMUmxlUXoybGUwU0R4cFdPV1dMRzZIamhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzlwNk01ZXc0eFNTWEJsS2VEOVpZNyt3czFZT2lUZlhDQ255LzVSUi9PaWRFT1FVYmdqNgoxZm5PbG9ETXpLVi9COWlEcUlXNFdMZUoxMzQ4Vm1IQWF3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo="
            }'
```

or

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-pipeline' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:6443",
                "cluster_kind": "kubernetes",
                "cluster_type": "physical",
                "usage": "worker",
                "worker_type": "pipeline",
                "primary_domain": "8.217.50.114.nip.io",
                "tekton_host": "tekton.physical-worker-pipeline.8.217.50.114.nip.io",
                "argocd_host": "argocd.physical-worker-pipeline.8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2FrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRHTXlWbmtLWkcxV2VVeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJqTWxaNVpHMVdlVXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZG5Sa1JUZFNWVzFCU0hZeE9IZEVXREYyTDJwdWNXRkZVM05tY2pkdVVtNXdiVFZpWWpaME5tRUtSRFptWkhnME5uVlJZaXREWVdGalZYSlVNVlZ5Y1RWT1NUSk5USGhIU0M4eVMweEJMMlkwVDJWNFdqUnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVzEzTDFGSFNYYzFOMlZ0UWpobmFEaHdRVnBHQ21kclZHMXNRekIzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRkozUVhkU1FVbG5VMEZDWkRkTWRFVnhZblkzUTBwcVEyVkhhMWxqTDFacVVraDNObk5UU2tVS01ISkZWM1p5VkZGb1NGbERTVUpvWlhwUE9YUlRWVnB4VjNkbFZHazFTRlpUVUVoWU5uUm1SMkUwU2twa1RsTnVOMDFtYTBSTVpuTUtMUzB0TFMxRlRrUWdRMFZTVkVsR1NVTkJWRVV0TFMwdExRbz0KICAgIHNlcnZlcjogaHR0cHM6Ly8xMC4yMDQuMTE4LjIzOjY0NDMKICBuYW1lOiBkZWZhdWx0CmNvbnRleHRzOgotIGNvbnRleHQ6CiAgICBjbHVzdGVyOiBkZWZhdWx0CiAgICB1c2VyOiBkZWZhdWx0CiAgbmFtZTogZGVmYXVsdApjdXJyZW50LWNvbnRleHQ6IGRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBkZWZhdWx0CiAgdXNlcjoKICAgIGNsaWVudC1jZXJ0aWZpY2F0ZS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKclJFTkRRVlJsWjBGM1NVSkJaMGxKVDBNdlRVWm9kekZWU1hkM1EyZFpTVXR2V2tsNmFqQkZRWGRKZDBsNlJXaE5RamhIUVRGVlJVRjNkMWtLWVhwT2VreFhUbk5oVjFaMVpFTXhhbGxWUVhoT2FtY3lUVlJSZDA1RVl6Qk5RalJZUkZSSmVrMUVXWGRPZWtWNVRXcEZlRTVHYjFoRVZFa3dUVVJaZHdwT2FrVjVUV3BGZUU1R2IzZE5SRVZZVFVKVlIwRXhWVVZEYUUxUFl6TnNlbVJIVm5SUGJURm9Zek5TYkdOdVRYaEdWRUZVUW1kT1ZrSkJUVlJFU0U0MUNtTXpVbXhpVkhCb1drY3hjR0pxUWxwTlFrMUhRbmx4UjFOTk5EbEJaMFZIUTBOeFIxTk5ORGxCZDBWSVFUQkpRVUpEZG1GbGFrOVljMDlOVld0c2Qxb0tVMjVuTDFkWFR5OXpURTVYUkc5ck16RjNaM0E0ZGl0VlZXWjZiMjVTUkd0R1J6UkpLM1JZTlhwd1lVRjZUWGxzWm5kbVdXYzJhVVoxUm1remFXUmtLd3BRUmxwb2QwZDFhbE5FUWtkTlFUUkhRVEZWWkVSM1JVSXZkMUZGUVhkSlJtOUVRVlJDWjA1V1NGTlZSVVJFUVV0Q1oyZHlRbWRGUmtKUlkwUkJha0ZtQ2tKblRsWklVMDFGUjBSQlYyZENVU3RwY1haUVlWUXhSVzVxWlZBMFNsaHFXa3hTWVdkMU5uUnpWRUZMUW1kbmNXaHJhazlRVVZGRVFXZE9TRUZFUWtVS1FXbENNVkZ0UTJOeVJIWkdTVXhWTVVsM0swMWxhVVJrWkVSTVFraG9RVmRoT1VKMVQzTkNSRlpMVTBGNVowbG5TRWd5T1ZGNVVEZzFhRVpRVWtkNmRRcFFaRU5qZGpkVk4wMU5MMmxwT0c1emJHUXJUeTh5U1c4eVluYzlDaTB0TFMwdFJVNUVJRU5GVWxSSlJrbERRVlJGTFMwdExTMEtMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2VrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRGa3llSEFLV2xjMU1FeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJaTW5od1dsYzFNRXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZVhNM2MzSlpXRUZGY3pCUGEybHFXa3QwUjFoRVprMUhXbGh6TUdKeVNHeDRUMWR3UkdaMGQyY0tLMnhGTUdSYU5GSjRVMWhZVldoQ05FbzBaakIwWlVoWFJrNU5WbVUzYzFwak4ya3lOVEF3YldWb1VVVnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVkJ2Y1hKNk1tczVVa28wTTJvclExWTBNbE13Q2xkdlRIVnlZa1YzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRk5CUVhkU1VVbG9RVXhqUWxsbFJHRkVNVGMwWVZwYVVVMUNRbTUzTkhBdk5tWTVTMWhWYjJZS00ydHBSRkZYTlVOTFRXZ3pRV2xDZFdGUFIyNTJZbWwyYWpSRGVISlBja2d4V0VaU1VTOVZSMnRYWW10R1dFVXdlRXhXYzFWSlptcHJRVDA5Q2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBjbGllbnQta2V5LWRhdGE6IExTMHRMUzFDUlVkSlRpQkZReUJRVWtsV1FWUkZJRXRGV1MwdExTMHRDazFJWTBOQlVVVkZTVVo2VERZMlREWk1XR2t2TTNJelVFZEZZVFJNVW14bFVYb3liR1V3VTBSNGNGZFBWMWRNUnpaSWFtaHZRVzlIUTBOeFIxTk5ORGtLUVhkRlNHOVZVVVJSWjBGRlN6bHdOazAxWlhjMGVGTlRXRUpzUzJWRU9WcFpOeXQzY3pGWlQybFVabGhEUTI1NUx6VlNVaTlQYVdSRlQxRlZZbWRxTmdveFptNVBiRzlFVFhwTFZpOUNPV2xFY1VsWE5GZE1aVW94TXpRNFZtMUlRV0YzUFQwS0xTMHRMUzFGVGtRZ1JVTWdVRkpKVmtGVVJTQkxSVmt0TFMwdExRbz0="
            }'
```

The request example for the deployment runtime cluster after replacing variables is shown below:

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-deployment' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:6443",
                "cluster_kind": "kubernetes",
                "cluster_type": "physical",
                "usage": "worker",
                "worker_type": "deployment",
                "primary_domain": "8.217.50.114.nip.io",
                "argocd_host": "argocd.physical-worker-deployment.8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkakNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFRdnRkRTdSVW1BSHYxOHdEWDF2L2pucWFFU3NmcjduUm5wbTViYjZ0NmEKRDZmZHg0NnVRYitDYWFjVXJUMVVycTVOSTJNTHhHSC8yS0xBL2Y0T2V4WjRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVW13L1FHSXc1N2VtQjhnaDhwQVpGCmdrVG1sQzB3Q2dZSUtvWkl6ajBFQXdJRFJ3QXdSQUlnU0FCZDdMdEVxYnY3Q0pqQ2VHa1ljL1ZqUkh3NnNTSkUKMHJFV3ZyVFFoSFlDSUJoZXpPOXRTVVpxV3dlVGk1SFZTUEhYNnRmR2E0SkpkTlNuN01ma0RMZnMKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    server: https://10.204.118.23:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJT0MvTUZodzFVSXd3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamcyTVRRd05EYzBNQjRYRFRJek1EWXdOekV5TWpFeE5Gb1hEVEkwTURZdwpOakV5TWpFeE5Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdmFlak9Yc09NVWtsd1oKU25nL1dXTy9zTE5XRG9rMzF3Z3A4ditVVWZ6b25SRGtGRzRJK3RYNXpwYUF6TXlsZndmWWc2aUZ1RmkzaWRkKwpQRlpod0d1alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUStpcXZQYVQxRW5qZVA0SlhqWkxSYWd1NnRzVEFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCMVFtQ2NyRHZGSUxVMUl3K01laURkZERMQkhoQVdhOUJ1T3NCRFZLU0F5Z0lnSEgyOVF5UDg1aEZQUkd6dQpQZENjdjdVN01NL2lpOG5zbGQrTy8ySW8yYnc9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFReXM3c3JZWEFFczBPa2lqWkt0R1hEZk1HWlhzMGJySGx4T1dwRGZ0d2cKK2xFMGRaNFJ4U1hYVWhCNEo0ZjB0ZUhXRk5NVmU3c1pjN2kyNTAwbWVoUUVvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVVBvcXJ6Mms5Uko0M2orQ1Y0MlMwCldvTHVyYkV3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUxjQlllRGFEMTc0YVpaUU1CQm53NHAvNmY5S1hVb2YKM2tpRFFXNUNLTWgzQWlCdWFPR252Yml2ajRDeHJPckgxWEZSUS9VR2tXYmtGWEUweExWc1VJZmprQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUZ6TDY2TDZMWGkvM3IzUEdFYTRMUmxlUXoybGUwU0R4cFdPV1dMRzZIamhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzlwNk01ZXc0eFNTWEJsS2VEOVpZNyt3czFZT2lUZlhDQ255LzVSUi9PaWRFT1FVYmdqNgoxZm5PbG9ETXpLVi9COWlEcUlXNFdMZUoxMzQ4Vm1IQWF3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo="
            }'
```

or

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-deployment' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:6443",
                "cluster_kind": "kubernetes",
                "cluster_type": "physical",
                "usage": "worker",
                "worker_type": "deployment",
                "primary_domain": "8.217.50.114.nip.io",
                "argocd_host": "argocd.physical-worker-deployment.8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2FrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRHTXlWbmtLWkcxV2VVeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJqTWxaNVpHMVdlVXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZG5Sa1JUZFNWVzFCU0hZeE9IZEVXREYyTDJwdWNXRkZVM05tY2pkdVVtNXdiVFZpWWpaME5tRUtSRFptWkhnME5uVlJZaXREWVdGalZYSlVNVlZ5Y1RWT1NUSk5USGhIU0M4eVMweEJMMlkwVDJWNFdqUnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVzEzTDFGSFNYYzFOMlZ0UWpobmFEaHdRVnBHQ21kclZHMXNRekIzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRkozUVhkU1FVbG5VMEZDWkRkTWRFVnhZblkzUTBwcVEyVkhhMWxqTDFacVVraDNObk5UU2tVS01ISkZWM1p5VkZGb1NGbERTVUpvWlhwUE9YUlRWVnB4VjNkbFZHazFTRlpUVUVoWU5uUm1SMkUwU2twa1RsTnVOMDFtYTBSTVpuTUtMUzB0TFMxRlRrUWdRMFZTVkVsR1NVTkJWRVV0TFMwdExRbz0KICAgIHNlcnZlcjogaHR0cHM6Ly8xMC4yMDQuMTE4LjIzOjY0NDMKICBuYW1lOiBkZWZhdWx0CmNvbnRleHRzOgotIGNvbnRleHQ6CiAgICBjbHVzdGVyOiBkZWZhdWx0CiAgICB1c2VyOiBkZWZhdWx0CiAgbmFtZTogZGVmYXVsdApjdXJyZW50LWNvbnRleHQ6IGRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBkZWZhdWx0CiAgdXNlcjoKICAgIGNsaWVudC1jZXJ0aWZpY2F0ZS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKclJFTkRRVlJsWjBGM1NVSkJaMGxKVDBNdlRVWm9kekZWU1hkM1EyZFpTVXR2V2tsNmFqQkZRWGRKZDBsNlJXaE5RamhIUVRGVlJVRjNkMWtLWVhwT2VreFhUbk5oVjFaMVpFTXhhbGxWUVhoT2FtY3lUVlJSZDA1RVl6Qk5RalJZUkZSSmVrMUVXWGRPZWtWNVRXcEZlRTVHYjFoRVZFa3dUVVJaZHdwT2FrVjVUV3BGZUU1R2IzZE5SRVZZVFVKVlIwRXhWVVZEYUUxUFl6TnNlbVJIVm5SUGJURm9Zek5TYkdOdVRYaEdWRUZVUW1kT1ZrSkJUVlJFU0U0MUNtTXpVbXhpVkhCb1drY3hjR0pxUWxwTlFrMUhRbmx4UjFOTk5EbEJaMFZIUTBOeFIxTk5ORGxCZDBWSVFUQkpRVUpEZG1GbGFrOVljMDlOVld0c2Qxb0tVMjVuTDFkWFR5OXpURTVYUkc5ck16RjNaM0E0ZGl0VlZXWjZiMjVTUkd0R1J6UkpLM1JZTlhwd1lVRjZUWGxzWm5kbVdXYzJhVVoxUm1remFXUmtLd3BRUmxwb2QwZDFhbE5FUWtkTlFUUkhRVEZWWkVSM1JVSXZkMUZGUVhkSlJtOUVRVlJDWjA1V1NGTlZSVVJFUVV0Q1oyZHlRbWRGUmtKUlkwUkJha0ZtQ2tKblRsWklVMDFGUjBSQlYyZENVU3RwY1haUVlWUXhSVzVxWlZBMFNsaHFXa3hTWVdkMU5uUnpWRUZMUW1kbmNXaHJhazlRVVZGRVFXZE9TRUZFUWtVS1FXbENNVkZ0UTJOeVJIWkdTVXhWTVVsM0swMWxhVVJrWkVSTVFraG9RVmRoT1VKMVQzTkNSRlpMVTBGNVowbG5TRWd5T1ZGNVVEZzFhRVpRVWtkNmRRcFFaRU5qZGpkVk4wMU5MMmxwT0c1emJHUXJUeTh5U1c4eVluYzlDaTB0TFMwdFJVNUVJRU5GVWxSSlJrbERRVlJGTFMwdExTMEtMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2VrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRGa3llSEFLV2xjMU1FeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJaTW5od1dsYzFNRXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZVhNM2MzSlpXRUZGY3pCUGEybHFXa3QwUjFoRVprMUhXbGh6TUdKeVNHeDRUMWR3UkdaMGQyY0tLMnhGTUdSYU5GSjRVMWhZVldoQ05FbzBaakIwWlVoWFJrNU5WbVUzYzFwak4ya3lOVEF3YldWb1VVVnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVkJ2Y1hKNk1tczVVa28wTTJvclExWTBNbE13Q2xkdlRIVnlZa1YzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRk5CUVhkU1VVbG9RVXhqUWxsbFJHRkVNVGMwWVZwYVVVMUNRbTUzTkhBdk5tWTVTMWhWYjJZS00ydHBSRkZYTlVOTFRXZ3pRV2xDZFdGUFIyNTJZbWwyYWpSRGVISlBja2d4V0VaU1VTOVZSMnRYWW10R1dFVXdlRXhXYzFWSlptcHJRVDA5Q2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBjbGllbnQta2V5LWRhdGE6IExTMHRMUzFDUlVkSlRpQkZReUJRVWtsV1FWUkZJRXRGV1MwdExTMHRDazFJWTBOQlVVVkZTVVo2VERZMlREWk1XR2t2TTNJelVFZEZZVFJNVW14bFVYb3liR1V3VTBSNGNGZFBWMWRNUnpaSWFtaHZRVzlIUTBOeFIxTk5ORGtLUVhkRlNHOVZVVVJSWjBGRlN6bHdOazAxWlhjMGVGTlRXRUpzUzJWRU9WcFpOeXQzY3pGWlQybFVabGhEUTI1NUx6VlNVaTlQYVdSRlQxRlZZbWRxTmdveFptNVBiRzlFVFhwTFZpOUNPV2xFY1VsWE5GZE1aVW94TXpRNFZtMUlRV0YzUFQwS0xTMHRMUzFGVGtRZ1JVTWdVRkpKVmtGVVJTQkxSVmt0TFMwdExRbz0="
            }'
```

### Execute Physical Cluster Registration Request

Use the curl command or other tools to execute the API request to register a physical cluster.

After the request is successful, the physical cluster's resource file will be written to the tenant configuration repository, and the physical cluster will be registered as a runtime cluster in the tenant management cluster based on the resource file. Upon successful registration, components such as ArgoCD, ArgoRollouts, Tekton, ExternalSecret, HNC, and Vault-agent will be installed in the physical cluster.

> If your account is a member of the tenant configuration repository and has write permission to the `main` branch, you can register runtime clusters.

## Register Virtual Cluster（API）

When registering a virtual cluster as a runtime cluster, you need to first register the physical cluster as the host cluster, and then register the virtual cluster to the host cluster.

### Compose Host Cluster Registration Request

Compose an API request example by API definition `Cluster_SaveCluster` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server
    # Replace the variable $gitlab-access-token with the GitLab access token
    # Replace the variable $cluster-name with the cluster name
    curl -X 'POST' \
        'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' \
        -d '{
                # Cluster API SERVER URL. Replace the variable with the address of the host cluster.
                "api_server": $api-server,
                # Cluster kind. Currently only supports Kubernetes.
                "cluster_kind": "kubernetes",
                # Cluster type: virtual or physical
                "cluster_type": $cluster-type,
                # Cluster usage: host or worker
                "usage": $usage,
                # Primary domain: Replace $cluster-ip with the host cluster IP.
                "primary_domain": "$cluster-ip.nip.io"
                # Traefik configuration
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                # Content of the kubeconfig file of the cluster. Replace the variable with the kubeconfig of the host cluster,
                # and ensure that the kubeconfig has been escaped for newline characters or has been encoded with Base64.
                "kubeconfig": $kubeconfig
            }'
```

The request example after replacing the variables is shown below:

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:6443",
                "cluster_kind": "kubernetes",
                "cluster_type": "physical",
                "usage": "host",
                "primary_domain": "8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkakNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdGMyVnkKZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRjMlZ5ZG1WeUxXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFRdnRkRTdSVW1BSHYxOHdEWDF2L2pucWFFU3NmcjduUm5wbTViYjZ0NmEKRDZmZHg0NnVRYitDYWFjVXJUMVVycTVOSTJNTHhHSC8yS0xBL2Y0T2V4WjRvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVW13L1FHSXc1N2VtQjhnaDhwQVpGCmdrVG1sQzB3Q2dZSUtvWkl6ajBFQXdJRFJ3QXdSQUlnU0FCZDdMdEVxYnY3Q0pqQ2VHa1ljL1ZqUkh3NnNTSkUKMHJFV3ZyVFFoSFlDSUJoZXpPOXRTVVpxV3dlVGk1SFZTUEhYNnRmR2E0SkpkTlNuN01ma0RMZnMKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\n    server: https://10.204.118.23:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    client-certificate-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJrRENDQVRlZ0F3SUJBZ0lJT0MvTUZodzFVSXd3Q2dZSUtvWkl6ajBFQXdJd0l6RWhNQjhHQTFVRUF3d1kKYXpOekxXTnNhV1Z1ZEMxallVQXhOamcyTVRRd05EYzBNQjRYRFRJek1EWXdOekV5TWpFeE5Gb1hEVEkwTURZdwpOakV5TWpFeE5Gb3dNREVYTUJVR0ExVUVDaE1PYzNsemRHVnRPbTFoYzNSbGNuTXhGVEFUQmdOVkJBTVRESE41CmMzUmxiVHBoWkcxcGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJDdmFlak9Yc09NVWtsd1oKU25nL1dXTy9zTE5XRG9rMzF3Z3A4ditVVWZ6b25SRGtGRzRJK3RYNXpwYUF6TXlsZndmWWc2aUZ1RmkzaWRkKwpQRlpod0d1alNEQkdNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBakFmCkJnTlZIU01FR0RBV2dCUStpcXZQYVQxRW5qZVA0SlhqWkxSYWd1NnRzVEFLQmdncWhrak9QUVFEQWdOSEFEQkUKQWlCMVFtQ2NyRHZGSUxVMUl3K01laURkZERMQkhoQVdhOUJ1T3NCRFZLU0F5Z0lnSEgyOVF5UDg1aEZQUkd6dQpQZENjdjdVN01NL2lpOG5zbGQrTy8ySW8yYnc9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUJkekNDQVIyZ0F3SUJBZ0lCQURBS0JnZ3Foa2pPUFFRREFqQWpNU0V3SHdZRFZRUUREQmhyTTNNdFkyeHAKWlc1MExXTmhRREUyT0RZeE5EQTBOelF3SGhjTk1qTXdOakEzTVRJeU1URTBXaGNOTXpNd05qQTBNVEl5TVRFMApXakFqTVNFd0h3WURWUVFEREJock0zTXRZMnhwWlc1MExXTmhRREUyT0RZeE5EQTBOelF3V1RBVEJnY3Foa2pPClBRSUJCZ2dxaGtqT1BRTUJCd05DQUFReXM3c3JZWEFFczBPa2lqWkt0R1hEZk1HWlhzMGJySGx4T1dwRGZ0d2cKK2xFMGRaNFJ4U1hYVWhCNEo0ZjB0ZUhXRk5NVmU3c1pjN2kyNTAwbWVoUUVvMEl3UURBT0JnTlZIUThCQWY4RQpCQU1DQXFRd0R3WURWUjBUQVFIL0JBVXdBd0VCL3pBZEJnTlZIUTRFRmdRVVBvcXJ6Mms5Uko0M2orQ1Y0MlMwCldvTHVyYkV3Q2dZSUtvWkl6ajBFQXdJRFNBQXdSUUloQUxjQlllRGFEMTc0YVpaUU1CQm53NHAvNmY5S1hVb2YKM2tpRFFXNUNLTWgzQWlCdWFPR252Yml2ajRDeHJPckgxWEZSUS9VR2tXYmtGWEUweExWc1VJZmprQT09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K\n    client-key-data: LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUZ6TDY2TDZMWGkvM3IzUEdFYTRMUmxlUXoybGUwU0R4cFdPV1dMRzZIamhvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFSzlwNk01ZXc0eFNTWEJsS2VEOVpZNyt3czFZT2lUZlhDQ255LzVSUi9PaWRFT1FVYmdqNgoxZm5PbG9ETXpLVi9COWlEcUlXNFdMZUoxMzQ4Vm1IQWF3PT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQo="
            }'
```

or

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:6443",
                "cluster_kind": "kubernetes",
                "cluster_type": "physical",
                "usage": "host",
                "primary_domain": "8.217.50.114.nip.io",
                "traefik": {
                  "http_node_port": "30080",
                  "https_node_port": "30443"
                },
                "kubeconfig": "YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2FrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRHTXlWbmtLWkcxV2VVeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJqTWxaNVpHMVdlVXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZG5Sa1JUZFNWVzFCU0hZeE9IZEVXREYyTDJwdWNXRkZVM05tY2pkdVVtNXdiVFZpWWpaME5tRUtSRFptWkhnME5uVlJZaXREWVdGalZYSlVNVlZ5Y1RWT1NUSk5USGhIU0M4eVMweEJMMlkwVDJWNFdqUnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVzEzTDFGSFNYYzFOMlZ0UWpobmFEaHdRVnBHQ21kclZHMXNRekIzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRkozUVhkU1FVbG5VMEZDWkRkTWRFVnhZblkzUTBwcVEyVkhhMWxqTDFacVVraDNObk5UU2tVS01ISkZWM1p5VkZGb1NGbERTVUpvWlhwUE9YUlRWVnB4VjNkbFZHazFTRlpUVUVoWU5uUm1SMkUwU2twa1RsTnVOMDFtYTBSTVpuTUtMUzB0TFMxRlRrUWdRMFZTVkVsR1NVTkJWRVV0TFMwdExRbz0KICAgIHNlcnZlcjogaHR0cHM6Ly8xMC4yMDQuMTE4LjIzOjY0NDMKICBuYW1lOiBkZWZhdWx0CmNvbnRleHRzOgotIGNvbnRleHQ6CiAgICBjbHVzdGVyOiBkZWZhdWx0CiAgICB1c2VyOiBkZWZhdWx0CiAgbmFtZTogZGVmYXVsdApjdXJyZW50LWNvbnRleHQ6IGRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBkZWZhdWx0CiAgdXNlcjoKICAgIGNsaWVudC1jZXJ0aWZpY2F0ZS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKclJFTkRRVlJsWjBGM1NVSkJaMGxKVDBNdlRVWm9kekZWU1hkM1EyZFpTVXR2V2tsNmFqQkZRWGRKZDBsNlJXaE5RamhIUVRGVlJVRjNkMWtLWVhwT2VreFhUbk5oVjFaMVpFTXhhbGxWUVhoT2FtY3lUVlJSZDA1RVl6Qk5RalJZUkZSSmVrMUVXWGRPZWtWNVRXcEZlRTVHYjFoRVZFa3dUVVJaZHdwT2FrVjVUV3BGZUU1R2IzZE5SRVZZVFVKVlIwRXhWVVZEYUUxUFl6TnNlbVJIVm5SUGJURm9Zek5TYkdOdVRYaEdWRUZVUW1kT1ZrSkJUVlJFU0U0MUNtTXpVbXhpVkhCb1drY3hjR0pxUWxwTlFrMUhRbmx4UjFOTk5EbEJaMFZIUTBOeFIxTk5ORGxCZDBWSVFUQkpRVUpEZG1GbGFrOVljMDlOVld0c2Qxb0tVMjVuTDFkWFR5OXpURTVYUkc5ck16RjNaM0E0ZGl0VlZXWjZiMjVTUkd0R1J6UkpLM1JZTlhwd1lVRjZUWGxzWm5kbVdXYzJhVVoxUm1remFXUmtLd3BRUmxwb2QwZDFhbE5FUWtkTlFUUkhRVEZWWkVSM1JVSXZkMUZGUVhkSlJtOUVRVlJDWjA1V1NGTlZSVVJFUVV0Q1oyZHlRbWRGUmtKUlkwUkJha0ZtQ2tKblRsWklVMDFGUjBSQlYyZENVU3RwY1haUVlWUXhSVzVxWlZBMFNsaHFXa3hTWVdkMU5uUnpWRUZMUW1kbmNXaHJhazlRVVZGRVFXZE9TRUZFUWtVS1FXbENNVkZ0UTJOeVJIWkdTVXhWTVVsM0swMWxhVVJrWkVSTVFraG9RVmRoT1VKMVQzTkNSRlpMVTBGNVowbG5TRWd5T1ZGNVVEZzFhRVpRVWtkNmRRcFFaRU5qZGpkVk4wMU5MMmxwT0c1emJHUXJUeTh5U1c4eVluYzlDaTB0TFMwdFJVNUVJRU5GVWxSSlJrbERRVlJGTFMwdExTMEtMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKa2VrTkRRVkl5WjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVdwTlUwVjNTSGRaUkZaUlVVUkVRbWh5VFROTmRGa3llSEFLV2xjMU1FeFhUbWhSUkVVeVQwUlplRTVFUVRCT2VsRjNTR2hqVGsxcVRYZE9ha0V6VFZSSmVVMVVSVEJYYUdOT1RYcE5kMDVxUVRCTlZFbDVUVlJGTUFwWGFrRnFUVk5GZDBoM1dVUldVVkZFUkVKb2NrMHpUWFJaTW5od1dsYzFNRXhYVG1oUlJFVXlUMFJaZUU1RVFUQk9lbEYzVjFSQlZFSm5ZM0ZvYTJwUENsQlJTVUpDWjJkeGFHdHFUMUJSVFVKQ2QwNURRVUZSZVhNM2MzSlpXRUZGY3pCUGEybHFXa3QwUjFoRVprMUhXbGh6TUdKeVNHeDRUMWR3UkdaMGQyY0tLMnhGTUdSYU5GSjRVMWhZVldoQ05FbzBaakIwWlVoWFJrNU5WbVUzYzFwak4ya3lOVEF3YldWb1VVVnZNRWwzVVVSQlQwSm5UbFpJVVRoQ1FXWTRSUXBDUVUxRFFYRlJkMFIzV1VSV1VqQlVRVkZJTDBKQlZYZEJkMFZDTDNwQlpFSm5UbFpJVVRSRlJtZFJWVkJ2Y1hKNk1tczVVa28wTTJvclExWTBNbE13Q2xkdlRIVnlZa1YzUTJkWlNVdHZXa2w2YWpCRlFYZEpSRk5CUVhkU1VVbG9RVXhqUWxsbFJHRkVNVGMwWVZwYVVVMUNRbTUzTkhBdk5tWTVTMWhWYjJZS00ydHBSRkZYTlVOTFRXZ3pRV2xDZFdGUFIyNTJZbWwyYWpSRGVISlBja2d4V0VaU1VTOVZSMnRYWW10R1dFVXdlRXhXYzFWSlptcHJRVDA5Q2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBjbGllbnQta2V5LWRhdGE6IExTMHRMUzFDUlVkSlRpQkZReUJRVWtsV1FWUkZJRXRGV1MwdExTMHRDazFJWTBOQlVVVkZTVVo2VERZMlREWk1XR2t2TTNJelVFZEZZVFJNVW14bFVYb3liR1V3VTBSNGNGZFBWMWRNUnpaSWFtaHZRVzlIUTBOeFIxTk5ORGtLUVhkRlNHOVZVVVJSWjBGRlN6bHdOazAxWlhjMGVGTlRXRUpzUzJWRU9WcFpOeXQzY3pGWlQybFVabGhEUTI1NUx6VlNVaTlQYVdSRlQxRlZZbWRxTmdveFptNVBiRzlFVFhwTFZpOUNPV2xFY1VsWE5GZE1aVW94TXpRNFZtMUlRV0YzUFQwS0xTMHRMUzFGVGtRZ1JVTWdVRkpKVmtGVVJTQkxSVmt0TFMwdExRbz0="
            }'
```

### Execute Host Cluster Registration Request

Use the curl command or other tools to execute the API request to register a host cluster.

After the request is successful, the host cluster's resource file will be written to the tenant configuration repository, and the host cluster will be registered in the tenant management cluster based on the resource file. Upon successful registration, components such as Traefik will be installed in the host cluster.

### Compose Virtual Cluster Registration Request

Compose an API request example by API definition `Cluster_SaveCluster` and add the access token as a request header.

```Shell
    # Replace the variable $api-server-address with the access address of the Nautes API Server
    # Replace the variable $gitlab-access-token with the GitLab access token
    # Replace the variable $cluster-name with the cluster name
    curl -X 'POST' \
        'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token' \
        -d '{
                # Cluster API SERVER URL. Replace the parameter with the format 'https://$hostcluster-ip:$api-server-port',
                # where $hostcluster-ip refers to the IP of the host cluster 
                # and $api-server-port refers to the API SERVER port of the virtual cluster.
                "api_server": $api-server,
                # Cluster kind: Currently only supports Kubernetes
                "cluster_kind": "kubernetes",
                # Cluster type: virtual or physical
                "cluster_type": $cluster-type,
                # Cluster usage: host or worker
                "usage": $usage,
                # Work type: pipeline or deployment
                "worker_type": $worker_type,
                # Host cluster: the property is only available for virtual type clusters. Replace the parameter with the name of the host cluster.
                "host_cluster": $host-cluster,
                # Primary domain: Replace $cluster-ip with the host cluster IP.
                "primary_domain": "$cluster-ip.nip.io"
                # Tekton domain：When the worker_type is set to 'pipeline', the property should be filled in. Replace $cluster-ip with the host cluster IP.
                "tekton_host": "tekton.$cluster-name.$cluster-ip.nip.io"
                # ArgoCD domain. Replace $cluster_ip with the host cluster IP.
                "argocd_host": "argocd.$cluster-name.$cluster-ip.nip.io",
                # Virtual cluster configuration: the property is only available for virtual type clusters.
                "vcluster": {
                  # API SERVER port 
                  "https_node_port": $api-server-port,
                }
            }'
```

The request example for the project pipeline runtime cluster after replacing variables is shown below:

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/virtual-worker-pipeline' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:31456",
                "cluster_kind": "kubernetes",
                "cluster_type": "virtual",
                "usage": "worker",
                "worker_type": "pipeline",
                "host_cluster": "cluster-host",
                "primary_domain": "8.217.50.114.nip.io",
                "teoken_host": "tekton.virtual-worker-pipeline.8.217.50.114.nip.io",
                "argocd_host": "argocd.virtual-worker-pipeline.8.217.50.114.nip.io",
                "vcluster": {
                  "https_node_port": "31456"
                }
            }'
```

The request example for the deployment runtime cluster after replacing variables is shown below:

```Shell
    curl -X 'POST' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/virtual-worker-deployment' \
        -H 'accept: application/json' \
        -H 'Content-Type: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxx' \
        -d '{
                "api_server": "https://8.217.50.114:31456",
                "cluster_kind": "kubernetes",
                "cluster_type": "virtual",
                "usage": "worker",
                "worker_type": "deployment",
                "host_cluster": "cluster-host",
                "primary_domain": "8.217.50.114.nip.io",
                "argocd_host": "argocd.virtual-worker-deployment.8.217.50.114.nip.io",
                "vcluster": {
                  "https_node_port": "31456"
                }
            }'
```

### Execute Virtual Cluster Registration Request

Use the curl command or other tools to execute the API request to register a virtual cluster.

After the request is successful, the virtual cluster's resource file will be written to the tenant configuration repository, and the virtual cluster will be registered as a runtime cluster in the tenant management cluster based on the resource file. Upon successful registration, components such as ArgoCD, ArgoRollouts, Tekton, ExternalSecret, HNC, and Vault-agent will be installed in the virtual cluster.

> If your account is a member of the tenant configuration repository and has write permission to the `main` branch, you can register runtime clusters.

## Delete Physical Cluster（API）

> Please ensure that a physical cluster has been successfully registered.
>
> Before deleting the cluster, please ensure that the product configuration manifest has been successfully deleted. For more information, refer to the [Delete Runtime (Command-Line)](clean-environment.md#delete-runtime) or the APIs in [Delete Deployment-Runtime](deployment-runtime.md#delete-deployment-runtime-api), [Delete Pipeline-Runtime](project-pipeline-runtime.md#delete-pipeline-runtime-api), [Delete Environment](environment.md#delete-environment-api), [Delete Repository](code-repo.md#delete-repository-api), [Delete Project](project.md#delete-project-api), [Delete Product](product.md#delete-product-api).

### Compose Physical Cluster Deletion Request

Compose an API request example by API definition `Cluster_DeleteCluster` and add the access token as a request header.

```Shell
    curl -X 'DELETE' \
        'HTTP://$api-server-address/api/v1/clusters/$cluster-name' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer $gitlab-access-token'
```

The request example after replacing the variables is shown below: 

```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/physical-worker-deployment' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute Physical Cluster Deletion Request

Use the curl command or other tools to execute the API request.

After the request is successful, the cluster resource file in the tenant configuration repository will be deleted, and the physical cluster will be cleaned up.

> If your account is a member of the tenant configuration repository and has write permission to the `main` branch, you can delete runtime clusters.

## Delete Virtual Cluster（API）

> Please ensure that a virtual cluster has been successfully registered.
>
> Before deleting the cluster, please ensure that the product configuration manifest has been successfully deleted.

### Compose Virtual Cluster Deletion Request

Compose an API request example by API definition `Cluster_DeleteCluster` and add the access token as a request header. The API request example is similar to [Delete Physical Cluster](#delete-physical-clusterapi):

```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/virtual-worker-pipeline' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute Virtual Cluster Deletion Request

Use the curl command or other tools to execute the API request.

After the request is successful, the cluster resource file in the tenant configuration repository will be deleted, and the virtual cluster will be destroyed.

### Compose Host Cluster Deletion Request

Compose an API request example by API definition `Cluster_DeleteCluster` and add the access token as a request header. The API request example is similar to [Delete Physical Cluster](#delete-physical-clusterapi):

```Shell
    curl -X 'DELETE' \
        'HTTP://xxx.xxx.xxx.xxx:xxxxx/api/v1/clusters/cluster-host' \
        -H 'accept: application/json' \
        -H 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxx'
```

### Execute Host Cluster Deletion Request

Use the curl command or other tools to execute the API request.

After the request is successful, the cluster resource file in the tenant configuration repository will be deleted, and the host cluster will be cleaned up.

> If your account is a member of the tenant configuration repository and has write permission to the `main` branch, you can delete runtime clusters.
