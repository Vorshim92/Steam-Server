<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::all();
        return $services;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        //
    }

    public function createTempCustomService(Request $request)
    {
        $requestData = $request->all();
        $validateData = $request->validate([
            'id' => 'required',
            'cpu' => 'required|string',
            'ram' => 'required|integer',
            'slots' => 'required|integer',
            'game_id' => 'required|integer',
        ]);

        try {
            $service = new Service();
            $service->id = $validateData['id'];
            $service->type = "custom";
            $service->cpu = $validateData['cpu'];
            $service->ram = $validateData['ram'];
            $service->slots = $validateData['slots'];
            $service->game_id = $validateData['game_id'];
            // $service->save();
            return $service;
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error creating service'], 500);
        }
    }
}
