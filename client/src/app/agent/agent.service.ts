import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agent } from './agent.model';

@Injectable()
export class AgentService {
    agents: Agent[] = [];
    agentsIsLoading: boolean = false;
    agentsIsLoaded: boolean = false;

    constructor(private httpClient: HttpClient) { }

    loadAgentList() {
        this.agentsIsLoading = true;
        this.agentsIsLoaded = false;
        this.httpClient.get<any>('http://localhost:3000/agents').subscribe(data => {
            this.agents = data;
            this.agentsIsLoading = false;
            this.agentsIsLoaded = true;
        });
    }
}
