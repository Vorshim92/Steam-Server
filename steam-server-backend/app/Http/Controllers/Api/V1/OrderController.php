<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Order;
use App\Models\Service;
use App\Models\Subscription;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\UpdateOrderRequest;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $user_id = Auth::id();
        $orders = Order::with('user_id')->where('user_id', $user_id)->get();
        return $orders;
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
    public function store(Request $request)
    {
        $service = Service::find($request->service_id);
        if ($service->type === 'custom') {
            $requestData = $request->all();
            $validateData = $request->validate([
                'cpu' => 'required|string',
                'ram' => 'required|integer',
                'slots' => 'required|integer',
                'game_id' => 'required|integer',
            ]);


            try {
                $tempService = new Service();
                $tempService->id = $request->service_id;
                $tempService->type = "custom";
                $tempService->cpu = $validateData['cpu'];
                $tempService->ram = $validateData['ram'];
                $tempService->slots = $validateData['slots'];
                $tempService->game_id = $validateData['game_id'];

                if ($tempService) {
                    $order = new Order();
                    $order->price = $tempService->price;
                    $order->status = 'pending';
                    if (!$request->user_id) {
                        return;
                    } else {

                        $order->user_id = $request->user_id;
                    }
                    $order->service_id = $request->service_id;

                    $order->save();
                }
            } catch (\Exception $e) {
                return response()->json(['message' => 'Error creating service'], 500);
            }
        }



        $order = new Order();
        $order->price = $service->price;
        $order->status = 'pending';
        if (!$request->user_id) {
            $order->user_id = 1;
        } else {

            $order->user_id = $request->user_id;
        }
        $order->service_id = $request->service_id;

        $order->save();

        return response()->json($order,  401);
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return $order;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrderRequest $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }

    public function completeOrder(Order $order)
    {
        $order->status = 'completed';
        $order->save();

        Subscription::store($order->subscription);
        return response()->json($order,  401);
    }
}
